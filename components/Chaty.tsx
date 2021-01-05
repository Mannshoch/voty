import {
  ChatContainer,
  MessageList,
  InputBox,
  TypingIndicator,
  ChatHeader,
  MessageOrInfo,
  Direction,
  TMessage,
} from "components/ChatElements";
import { Box, Button, Text, Card, Link } from "rebass";
import { useEffect, useMemo, useRef, useState } from "react";

const WAIT = 50;
const MAX_WAIT = 5000;

export const Chaty: React.FC<{
  lines: string;
  title?: string;
  speed?: number;
}> = ({ lines, title, speed = 1 }) => {
  const messages = useMemo<TMessage[]>(() => parseMessages(lines), [lines]);
  const [show, setShow] = useState<TMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [inputMessage, setInputMessage] = useState<TMessage>();
  const [cancel, setCancel] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => clearTimeout(cancel);
  }, []);

  // scroll to bottom on every new message
  useEffect(() => {
    if (started) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [show]);

  function doChat(line = 0, input?: string) {
    if (line < 0 || line >= messages.length) {
      return;
    }
    setInputMessage(undefined);
    setStarted(true);
    const msg = messages[line];
    const chars = msg.message?.length || 10;
    const wait = Math.min((1 / speed) * WAIT * chars, (1 / speed) * MAX_WAIT);
    if (messages[line].direction === Direction.Outgoing && !input) {
      setInputMessage(messages[line]);
      return;
    }

    setShow(messages.slice(0, line + 1));

    if (messages[line].direction === Direction.Outgoing && !input) {
      setInputMessage(messages[line]);
      return;
    }

    setShow(messages.slice(0, line + 1));

    if (line + 1 < messages.length) {
      if (messages[line + 1].direction !== Direction.Outgoing) {
        setTyping(true);
        setCancel(setTimeout(() => doChat(line + 1), wait));
      } else {
        setTyping(false);
        setCancel(
          setTimeout(
            () => setInputMessage(messages[line + 1]),
            (1 / speed) * 1000
          )
        );
      }
    } else {
      setTyping(false);
      setFinished(true);
    }
  }

  if (!started) {
    return (
      <Card>
        <Box textAlign="center">
          <Button mt={4} onClick={() => doChat()} width="250px">
            Chat starten
          </Button>
          <Text m={3} fontSize={1}>
            <Link
              onClick={() => doChat(messages.length - 1)}
              variant="underline"
            >
              Den ganzen Chat anzeigen
            </Link>
          </Text>
        </Box>
      </Card>
    );
  }

  function resetChat() {
    clearTimeout(cancel);
    setStarted(false);
    setFinished(false);
    setTyping(false);
    setInputMessage(undefined);
    setShow([]);
  }

  return (
    <ChatContainer>
      <ChatHeader title={title} onClick={resetChat} />
      <MessageList>
        {show.map((msg, i) => (
          <MessageOrInfo key={i} model={msg} is="Message" />
        ))}
        {typing ? <TypingIndicator /> : null}
        {finished ? (
          <Button mt={3} width="100%" onClick={() => resetChat()}>
            Fertig
          </Button>
        ) : (
          <div ref={messagesEndRef} style={{ height: 50, marginTop: 100 }} />
        )}
      </MessageList>
      <ShowInput message={inputMessage} doChat={doChat} />
    </ChatContainer>
  );
};

const ShowInput: React.FC<{
  message?: TMessage;
  doChat: (line: number, input?: string) => void;
}> = ({ message, doChat }) => {
  if (!message) return null;

  function selectOption(message: TMessage, o: string) {
    message.selected = o;
    doChat(message.line, o);
  }
  if (message.type === "BUTTONS" || message.type === "MENU") {
    const options = message.message?.split("|") || [];
    return (
      <InputBox>
        {options.map((o, i) => (
          <Button
            key={i}
            onClick={() => selectOption(message, o)}
            ml={i && 2}
            flex={1}
          >
            <Text fontSize={1}>{o}</Text>
          </Button>
        ))}
      </InputBox>
    );
  }
  return (
    <InputBox>
      <Button
        width="100%"
        onClick={() => selectOption(message, String(message.message))}
      >
        {message.message}
      </Button>
    </InputBox>
  );
};

export function parseMessages(lines: string): TMessage[] {
  lines = lines.trim();
  return lines.split(/\n+(?=[!\-*])/).map((line, ix) => parseMessage(line, ix));
}

function parseMessage(lines: string, ix: number): TMessage {
  lines = lines.trim();
  let direction: Direction;
  let type = "text";
  switch (lines[0]) {
    case "-":
      direction = Direction.Incoming;
      break;
    case "*":
      direction = Direction.Outgoing;
      break;
    case "!":
      direction = Direction.Info;
      break;
    default:
      throw new Error("ERR_CHATY_PARSE_DIRECTION");
  }
  // remove message type character and whitespace at beginning of lines
  let message = lines.replace(/^[-*!]?\s*/gm, "");
  let children = undefined;

  // check for special commands: GIPHY / IMAGE / BUTTON, etc.
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  const match = message.match(/^([A-Z]{3,}):?\s+/);
  if (match && match[1]) {
    type = match[1];
    const rest = message.substr(match[0].length);
    const result = specialMessage(type, rest);
    if (typeof result === "string") {
      message = result;
    } else {
      children = result;
    }
  }

  // does the message contain just 1-2 emojis?
  if (/^\p{Emoji}{1,2}$/mu.test(message)) {
    type = "emoji";
    children = <span style={{ fontSize: 40 }}>{message}</span>;
  }
  return { direction, message, type, line: ix, children };
}

function specialMessage(type: string, rest: string): React.ReactNode {
  switch (type) {
    case "GIF":
    case "GIPHY": {
      let media = rest;
      // from https://giphy.com/gifs/fifa-h7LENyTiMBCp0pCaGz to
      // https://media0.giphy.com/media/h7LENyTiMBCp0pCaGz/giphy.mp4
      let id = rest.replace(/.*\/gifs\/([^/]*)$/, "$1");
      if (id.indexOf("-")) id = id.replace(/.*?-/, "");
      if (id) media = `https://media0.giphy.com/media/${id}/giphy.mp4`;
      return <video src={media} autoPlay loop width="200" />;
    }
    case "IMAGE":
    case "IMG":
    case "BILD":
      return <img src={rest} width="200" />;
    case "BUTTONS":
    case "MENU": {
      // either single line: MENU (bla) (bli) (blo)
      // or multi line: MENU\n  bla\n  bli\n  blo
      const options =
        rest.indexOf("\n") >= 0
          ? rest.split("\n")
          : rest.replace(/^\s*\((.*?)\)\s*$/, "$1").split(/\)\s*\(/);
      return options.join("|");
    }
    case "BUTTON":
      return rest;
    default:
      console.error("Unkown special command: ", type);
      return rest;
  }
}
