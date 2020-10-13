import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Attachment = {
  __typename?: 'Attachment';
  createdAt: Scalars['DateTime'];
  file: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type AttachmentCreateManyWithoutBallotInput = {
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  create?: Maybe<Array<AttachmentCreateWithoutBallotInput>>;
};

export type AttachmentCreateManyWithoutThreadInput = {
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  create?: Maybe<Array<AttachmentCreateWithoutThreadInput>>;
};

export type AttachmentCreateManyWithoutUserInput = {
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  create?: Maybe<Array<AttachmentCreateWithoutUserInput>>;
};

export type AttachmentCreateWithoutBallotInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  file: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  thread?: Maybe<ThreadCreateOneWithoutAttachmentsInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutAttachmentsInput;
};

export type AttachmentCreateWithoutThreadInput = {
  ballot?: Maybe<BallotCreateOneWithoutAttachmentsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutAttachmentsInput;
};

export type AttachmentCreateWithoutUserInput = {
  ballot?: Maybe<BallotCreateOneWithoutAttachmentsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  thread?: Maybe<ThreadCreateOneWithoutAttachmentsInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AttachmentListRelationFilter = {
  every?: Maybe<AttachmentWhereInput>;
  none?: Maybe<AttachmentWhereInput>;
  some?: Maybe<AttachmentWhereInput>;
};

export type AttachmentScalarWhereInput = {
  AND?: Maybe<Array<AttachmentScalarWhereInput>>;
  ballotId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  file?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AttachmentScalarWhereInput>>;
  OR?: Maybe<Array<AttachmentScalarWhereInput>>;
  threadId?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type AttachmentUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  file?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttachmentUpdateManyWithoutBallotInput = {
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  create?: Maybe<Array<AttachmentCreateWithoutBallotInput>>;
  delete?: Maybe<Array<AttachmentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AttachmentScalarWhereInput>>;
  disconnect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  set?: Maybe<Array<AttachmentWhereUniqueInput>>;
  update?: Maybe<Array<AttachmentUpdateWithWhereUniqueWithoutBallotInput>>;
  updateMany?: Maybe<Array<AttachmentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AttachmentUpsertWithWhereUniqueWithoutBallotInput>>;
};

export type AttachmentUpdateManyWithoutThreadInput = {
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  create?: Maybe<Array<AttachmentCreateWithoutThreadInput>>;
  delete?: Maybe<Array<AttachmentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AttachmentScalarWhereInput>>;
  disconnect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  set?: Maybe<Array<AttachmentWhereUniqueInput>>;
  update?: Maybe<Array<AttachmentUpdateWithWhereUniqueWithoutThreadInput>>;
  updateMany?: Maybe<Array<AttachmentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AttachmentUpsertWithWhereUniqueWithoutThreadInput>>;
};

export type AttachmentUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  create?: Maybe<Array<AttachmentCreateWithoutUserInput>>;
  delete?: Maybe<Array<AttachmentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AttachmentScalarWhereInput>>;
  disconnect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  set?: Maybe<Array<AttachmentWhereUniqueInput>>;
  update?: Maybe<Array<AttachmentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AttachmentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AttachmentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AttachmentUpdateManyWithWhereNestedInput = {
  data: AttachmentUpdateManyDataInput;
  where: AttachmentScalarWhereInput;
};

export type AttachmentUpdateWithoutBallotDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  file?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutAttachmentsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAttachmentsInput>;
};

export type AttachmentUpdateWithoutThreadDataInput = {
  ballot?: Maybe<BallotUpdateOneWithoutAttachmentsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  file?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAttachmentsInput>;
};

export type AttachmentUpdateWithoutUserDataInput = {
  ballot?: Maybe<BallotUpdateOneWithoutAttachmentsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  file?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutAttachmentsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttachmentUpdateWithWhereUniqueWithoutBallotInput = {
  data: AttachmentUpdateWithoutBallotDataInput;
  where: AttachmentWhereUniqueInput;
};

export type AttachmentUpdateWithWhereUniqueWithoutThreadInput = {
  data: AttachmentUpdateWithoutThreadDataInput;
  where: AttachmentWhereUniqueInput;
};

export type AttachmentUpdateWithWhereUniqueWithoutUserInput = {
  data: AttachmentUpdateWithoutUserDataInput;
  where: AttachmentWhereUniqueInput;
};

export type AttachmentUpsertWithWhereUniqueWithoutBallotInput = {
  create: AttachmentCreateWithoutBallotInput;
  update: AttachmentUpdateWithoutBallotDataInput;
  where: AttachmentWhereUniqueInput;
};

export type AttachmentUpsertWithWhereUniqueWithoutThreadInput = {
  create: AttachmentCreateWithoutThreadInput;
  update: AttachmentUpdateWithoutThreadDataInput;
  where: AttachmentWhereUniqueInput;
};

export type AttachmentUpsertWithWhereUniqueWithoutUserInput = {
  create: AttachmentCreateWithoutUserInput;
  update: AttachmentUpdateWithoutUserDataInput;
  where: AttachmentWhereUniqueInput;
};

export type AttachmentWhereInput = {
  AND?: Maybe<Array<AttachmentWhereInput>>;
  ballot?: Maybe<BallotWhereInput>;
  ballotId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  file?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AttachmentWhereInput>>;
  OR?: Maybe<Array<AttachmentWhereInput>>;
  thread?: Maybe<ThreadWhereInput>;
  threadId?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type AttachmentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Ballot = {
  __typename?: 'Ballot';
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  canVote?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  hasVoted?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  scope: BallotScope;
  start: Scalars['DateTime'];
  title: Scalars['String'];
};

export type BallotCreateManyWithoutCreatorInput = {
  connect?: Maybe<Array<BallotWhereUniqueInput>>;
  create?: Maybe<Array<BallotCreateWithoutCreatorInput>>;
};

export type BallotCreateManyWithoutSchoolInput = {
  connect?: Maybe<Array<BallotWhereUniqueInput>>;
  create?: Maybe<Array<BallotCreateWithoutSchoolInput>>;
};

export type BallotCreateManyWithoutTeamInput = {
  connect?: Maybe<Array<BallotWhereUniqueInput>>;
  create?: Maybe<Array<BallotCreateWithoutTeamInput>>;
};

export type BallotCreateOneWithoutAttachmentsInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutAttachmentsInput>;
};

export type BallotCreateOneWithoutBallotRunsInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutBallotRunsInput>;
};

export type BallotCreateOneWithoutThreadInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutThreadInput>;
};

export type BallotCreateOneWithoutVotedInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutVotedInput>;
};

export type BallotCreateOneWithoutVotesInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutVotesInput>;
};

export type BallotCreateWithoutAttachmentsInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserCreateOneWithoutBallotsInput>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  school?: Maybe<SchoolCreateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  team?: Maybe<TeamCreateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadCreateOneWithoutBallotInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  voted?: Maybe<VotedCreateManyWithoutBallotInput>;
  votes?: Maybe<VoteCreateManyWithoutBallotInput>;
};

export type BallotCreateWithoutBallotRunsInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserCreateOneWithoutBallotsInput>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  school?: Maybe<SchoolCreateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  team?: Maybe<TeamCreateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadCreateOneWithoutBallotInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  voted?: Maybe<VotedCreateManyWithoutBallotInput>;
  votes?: Maybe<VoteCreateManyWithoutBallotInput>;
};

export type BallotCreateWithoutCreatorInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  school?: Maybe<SchoolCreateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  team?: Maybe<TeamCreateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadCreateOneWithoutBallotInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  voted?: Maybe<VotedCreateManyWithoutBallotInput>;
  votes?: Maybe<VoteCreateManyWithoutBallotInput>;
};

export type BallotCreateWithoutSchoolInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserCreateOneWithoutBallotsInput>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  team?: Maybe<TeamCreateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadCreateOneWithoutBallotInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  voted?: Maybe<VotedCreateManyWithoutBallotInput>;
  votes?: Maybe<VoteCreateManyWithoutBallotInput>;
};

export type BallotCreateWithoutTeamInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserCreateOneWithoutBallotsInput>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  school?: Maybe<SchoolCreateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  thread?: Maybe<ThreadCreateOneWithoutBallotInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  voted?: Maybe<VotedCreateManyWithoutBallotInput>;
  votes?: Maybe<VoteCreateManyWithoutBallotInput>;
};

export type BallotCreateWithoutThreadInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserCreateOneWithoutBallotsInput>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  school?: Maybe<SchoolCreateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  team?: Maybe<TeamCreateOneWithoutBallotsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  voted?: Maybe<VotedCreateManyWithoutBallotInput>;
  votes?: Maybe<VoteCreateManyWithoutBallotInput>;
};

export type BallotCreateWithoutVotedInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserCreateOneWithoutBallotsInput>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  school?: Maybe<SchoolCreateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  team?: Maybe<TeamCreateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadCreateOneWithoutBallotInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  votes?: Maybe<VoteCreateManyWithoutBallotInput>;
};

export type BallotCreateWithoutVotesInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunCreateManyWithoutBallotInput>;
  body: Scalars['String'];
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserCreateOneWithoutBallotsInput>;
  description: Scalars['String'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  options?: Maybe<OptionCreateManyWithoutBallotInput>;
  school?: Maybe<SchoolCreateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start: Scalars['DateTime'];
  team?: Maybe<TeamCreateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadCreateOneWithoutBallotInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  voted?: Maybe<VotedCreateManyWithoutBallotInput>;
};

export type BallotIdTeamIdCompoundUniqueInput = {
  ballotId: Scalars['String'];
  teamId: Scalars['String'];
};

export type BallotListRelationFilter = {
  every?: Maybe<BallotWhereInput>;
  none?: Maybe<BallotWhereInput>;
  some?: Maybe<BallotWhereInput>;
};

export type BallotOrderByInput = {
  body?: Maybe<SortOrder>;
  canton?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  creatorId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  end?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  scope?: Maybe<SortOrder>;
  start?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  threadId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type BallotRun = {
  __typename?: 'BallotRun';
  ballot: Ballot;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  start?: Maybe<Scalars['DateTime']>;
  team: Team;
};

export type BallotRunCreateManyWithoutBallotInput = {
  connect?: Maybe<Array<BallotRunWhereUniqueInput>>;
  create?: Maybe<Array<BallotRunCreateWithoutBallotInput>>;
};

export type BallotRunCreateManyWithoutTeamInput = {
  connect?: Maybe<Array<BallotRunWhereUniqueInput>>;
  create?: Maybe<Array<BallotRunCreateWithoutTeamInput>>;
};

export type BallotRunCreateWithoutBallotInput = {
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  team: TeamCreateOneWithoutBallotRunsInput;
};

export type BallotRunCreateWithoutTeamInput = {
  ballot: BallotCreateOneWithoutBallotRunsInput;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
};

export type BallotRunListRelationFilter = {
  every?: Maybe<BallotRunWhereInput>;
  none?: Maybe<BallotRunWhereInput>;
  some?: Maybe<BallotRunWhereInput>;
};

export type BallotRunScalarWhereInput = {
  AND?: Maybe<Array<BallotRunScalarWhereInput>>;
  ballotId?: Maybe<StringFilter>;
  end?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<BallotRunScalarWhereInput>>;
  OR?: Maybe<Array<BallotRunScalarWhereInput>>;
  start?: Maybe<DateTimeNullableFilter>;
  teamId?: Maybe<StringFilter>;
};

export type BallotRunUpdateManyDataInput = {
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type BallotRunUpdateManyWithoutBallotInput = {
  connect?: Maybe<Array<BallotRunWhereUniqueInput>>;
  create?: Maybe<Array<BallotRunCreateWithoutBallotInput>>;
  delete?: Maybe<Array<BallotRunWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BallotRunScalarWhereInput>>;
  disconnect?: Maybe<Array<BallotRunWhereUniqueInput>>;
  set?: Maybe<Array<BallotRunWhereUniqueInput>>;
  update?: Maybe<Array<BallotRunUpdateWithWhereUniqueWithoutBallotInput>>;
  updateMany?: Maybe<Array<BallotRunUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<BallotRunUpsertWithWhereUniqueWithoutBallotInput>>;
};

export type BallotRunUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<BallotRunWhereUniqueInput>>;
  create?: Maybe<Array<BallotRunCreateWithoutTeamInput>>;
  delete?: Maybe<Array<BallotRunWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BallotRunScalarWhereInput>>;
  disconnect?: Maybe<Array<BallotRunWhereUniqueInput>>;
  set?: Maybe<Array<BallotRunWhereUniqueInput>>;
  update?: Maybe<Array<BallotRunUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<BallotRunUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<BallotRunUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type BallotRunUpdateManyWithWhereNestedInput = {
  data: BallotRunUpdateManyDataInput;
  where: BallotRunScalarWhereInput;
};

export type BallotRunUpdateWithoutBallotDataInput = {
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutBallotRunsInput>;
};

export type BallotRunUpdateWithoutTeamDataInput = {
  ballot?: Maybe<BallotUpdateOneRequiredWithoutBallotRunsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type BallotRunUpdateWithWhereUniqueWithoutBallotInput = {
  data: BallotRunUpdateWithoutBallotDataInput;
  where: BallotRunWhereUniqueInput;
};

export type BallotRunUpdateWithWhereUniqueWithoutTeamInput = {
  data: BallotRunUpdateWithoutTeamDataInput;
  where: BallotRunWhereUniqueInput;
};

export type BallotRunUpsertWithWhereUniqueWithoutBallotInput = {
  create: BallotRunCreateWithoutBallotInput;
  update: BallotRunUpdateWithoutBallotDataInput;
  where: BallotRunWhereUniqueInput;
};

export type BallotRunUpsertWithWhereUniqueWithoutTeamInput = {
  create: BallotRunCreateWithoutTeamInput;
  update: BallotRunUpdateWithoutTeamDataInput;
  where: BallotRunWhereUniqueInput;
};

export type BallotRunWhereInput = {
  AND?: Maybe<Array<BallotRunWhereInput>>;
  ballot?: Maybe<BallotWhereInput>;
  ballotId?: Maybe<StringFilter>;
  end?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<BallotRunWhereInput>>;
  OR?: Maybe<Array<BallotRunWhereInput>>;
  start?: Maybe<DateTimeNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
};

export type BallotRunWhereUniqueInput = {
  ballotId_teamId?: Maybe<BallotIdTeamIdCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
};

export type BallotScalarWhereInput = {
  AND?: Maybe<Array<BallotScalarWhereInput>>;
  body?: Maybe<StringFilter>;
  canton?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  creatorId?: Maybe<StringNullableFilter>;
  description?: Maybe<StringFilter>;
  end?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<BallotScalarWhereInput>>;
  OR?: Maybe<Array<BallotScalarWhereInput>>;
  schoolId?: Maybe<StringNullableFilter>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFilter>;
  teamId?: Maybe<StringNullableFilter>;
  threadId?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export enum BallotScope {
  Cantonal = 'Cantonal',
  National = 'National',
  Public = 'Public',
  School = 'School',
  Team = 'Team'
}

export type BallotUpdateManyDataInput = {
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BallotUpdateManyWithoutCreatorInput = {
  connect?: Maybe<Array<BallotWhereUniqueInput>>;
  create?: Maybe<Array<BallotCreateWithoutCreatorInput>>;
  delete?: Maybe<Array<BallotWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BallotScalarWhereInput>>;
  disconnect?: Maybe<Array<BallotWhereUniqueInput>>;
  set?: Maybe<Array<BallotWhereUniqueInput>>;
  update?: Maybe<Array<BallotUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: Maybe<Array<BallotUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<BallotUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type BallotUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<BallotWhereUniqueInput>>;
  create?: Maybe<Array<BallotCreateWithoutSchoolInput>>;
  delete?: Maybe<Array<BallotWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BallotScalarWhereInput>>;
  disconnect?: Maybe<Array<BallotWhereUniqueInput>>;
  set?: Maybe<Array<BallotWhereUniqueInput>>;
  update?: Maybe<Array<BallotUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: Maybe<Array<BallotUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<BallotUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type BallotUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<BallotWhereUniqueInput>>;
  create?: Maybe<Array<BallotCreateWithoutTeamInput>>;
  delete?: Maybe<Array<BallotWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BallotScalarWhereInput>>;
  disconnect?: Maybe<Array<BallotWhereUniqueInput>>;
  set?: Maybe<Array<BallotWhereUniqueInput>>;
  update?: Maybe<Array<BallotUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<BallotUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<BallotUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type BallotUpdateManyWithWhereNestedInput = {
  data: BallotUpdateManyDataInput;
  where: BallotScalarWhereInput;
};

export type BallotUpdateOneRequiredWithoutBallotRunsInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutBallotRunsInput>;
  update?: Maybe<BallotUpdateWithoutBallotRunsDataInput>;
  upsert?: Maybe<BallotUpsertWithoutBallotRunsInput>;
};

export type BallotUpdateOneRequiredWithoutVotedInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutVotedInput>;
  update?: Maybe<BallotUpdateWithoutVotedDataInput>;
  upsert?: Maybe<BallotUpsertWithoutVotedInput>;
};

export type BallotUpdateOneRequiredWithoutVotesInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutVotesInput>;
  update?: Maybe<BallotUpdateWithoutVotesDataInput>;
  upsert?: Maybe<BallotUpsertWithoutVotesInput>;
};

export type BallotUpdateOneWithoutAttachmentsInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutAttachmentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BallotUpdateWithoutAttachmentsDataInput>;
  upsert?: Maybe<BallotUpsertWithoutAttachmentsInput>;
};

export type BallotUpdateOneWithoutThreadInput = {
  connect?: Maybe<BallotWhereUniqueInput>;
  create?: Maybe<BallotCreateWithoutThreadInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BallotUpdateWithoutThreadDataInput>;
  upsert?: Maybe<BallotUpsertWithoutThreadInput>;
};

export type BallotUpdateWithoutAttachmentsDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneWithoutBallotsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  school?: Maybe<SchoolUpdateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutBallotInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutBallotInput>;
  votes?: Maybe<VoteUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithoutBallotRunsDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneWithoutBallotsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  school?: Maybe<SchoolUpdateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutBallotInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutBallotInput>;
  votes?: Maybe<VoteUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithoutCreatorDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  school?: Maybe<SchoolUpdateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutBallotInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutBallotInput>;
  votes?: Maybe<VoteUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithoutSchoolDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneWithoutBallotsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutBallotInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutBallotInput>;
  votes?: Maybe<VoteUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithoutTeamDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneWithoutBallotsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  school?: Maybe<SchoolUpdateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutBallotInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutBallotInput>;
  votes?: Maybe<VoteUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithoutThreadDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneWithoutBallotsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  school?: Maybe<SchoolUpdateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutBallotsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutBallotInput>;
  votes?: Maybe<VoteUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithoutVotedDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneWithoutBallotsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  school?: Maybe<SchoolUpdateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutBallotInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  votes?: Maybe<VoteUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithoutVotesDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutBallotInput>;
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutBallotInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneWithoutBallotsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  end?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  options?: Maybe<OptionUpdateManyWithoutBallotInput>;
  school?: Maybe<SchoolUpdateOneWithoutBallotsInput>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutBallotsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutBallotInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutBallotInput>;
};

export type BallotUpdateWithWhereUniqueWithoutCreatorInput = {
  data: BallotUpdateWithoutCreatorDataInput;
  where: BallotWhereUniqueInput;
};

export type BallotUpdateWithWhereUniqueWithoutSchoolInput = {
  data: BallotUpdateWithoutSchoolDataInput;
  where: BallotWhereUniqueInput;
};

export type BallotUpdateWithWhereUniqueWithoutTeamInput = {
  data: BallotUpdateWithoutTeamDataInput;
  where: BallotWhereUniqueInput;
};

export type BallotUpsertWithoutAttachmentsInput = {
  create: BallotCreateWithoutAttachmentsInput;
  update: BallotUpdateWithoutAttachmentsDataInput;
};

export type BallotUpsertWithoutBallotRunsInput = {
  create: BallotCreateWithoutBallotRunsInput;
  update: BallotUpdateWithoutBallotRunsDataInput;
};

export type BallotUpsertWithoutThreadInput = {
  create: BallotCreateWithoutThreadInput;
  update: BallotUpdateWithoutThreadDataInput;
};

export type BallotUpsertWithoutVotedInput = {
  create: BallotCreateWithoutVotedInput;
  update: BallotUpdateWithoutVotedDataInput;
};

export type BallotUpsertWithoutVotesInput = {
  create: BallotCreateWithoutVotesInput;
  update: BallotUpdateWithoutVotesDataInput;
};

export type BallotUpsertWithWhereUniqueWithoutCreatorInput = {
  create: BallotCreateWithoutCreatorInput;
  update: BallotUpdateWithoutCreatorDataInput;
  where: BallotWhereUniqueInput;
};

export type BallotUpsertWithWhereUniqueWithoutSchoolInput = {
  create: BallotCreateWithoutSchoolInput;
  update: BallotUpdateWithoutSchoolDataInput;
  where: BallotWhereUniqueInput;
};

export type BallotUpsertWithWhereUniqueWithoutTeamInput = {
  create: BallotCreateWithoutTeamInput;
  update: BallotUpdateWithoutTeamDataInput;
  where: BallotWhereUniqueInput;
};

export type BallotWhereInput = {
  AND?: Maybe<Array<BallotWhereInput>>;
  attachments?: Maybe<AttachmentListRelationFilter>;
  BallotRuns?: Maybe<BallotRunListRelationFilter>;
  body?: Maybe<StringFilter>;
  canton?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  creator?: Maybe<UserWhereInput>;
  creatorId?: Maybe<StringNullableFilter>;
  description?: Maybe<StringFilter>;
  end?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<BallotWhereInput>>;
  options?: Maybe<OptionListRelationFilter>;
  OR?: Maybe<Array<BallotWhereInput>>;
  school?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<StringNullableFilter>;
  scope?: Maybe<BallotScope>;
  start?: Maybe<DateTimeFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringNullableFilter>;
  thread?: Maybe<ThreadWhereInput>;
  threadId?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  voted?: Maybe<VotedListRelationFilter>;
  votes?: Maybe<VoteListRelationFilter>;
};

export type BallotWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Domain = {
  __typename?: 'Domain';
  approved: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  schools: Array<School>;
};


export type DomainSchoolsArgs = {
  after?: Maybe<SchoolWhereUniqueInput>;
  before?: Maybe<SchoolWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DomainCreateOneWithoutSchoolsInput = {
  connect?: Maybe<DomainWhereUniqueInput>;
  create?: Maybe<DomainCreateWithoutSchoolsInput>;
};

export type DomainCreateOneWithoutTeamInput = {
  connect?: Maybe<DomainWhereUniqueInput>;
  create?: Maybe<DomainCreateWithoutTeamInput>;
};

export type DomainCreateWithoutSchoolsInput = {
  approved?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  Team?: Maybe<TeamCreateManyWithoutDomainInput>;
};

export type DomainCreateWithoutTeamInput = {
  approved?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  schools?: Maybe<SchoolCreateManyWithoutDomainInput>;
};

export type DomainUpdateOneWithoutSchoolsInput = {
  connect?: Maybe<DomainWhereUniqueInput>;
  create?: Maybe<DomainCreateWithoutSchoolsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<DomainUpdateWithoutSchoolsDataInput>;
  upsert?: Maybe<DomainUpsertWithoutSchoolsInput>;
};

export type DomainUpdateOneWithoutTeamInput = {
  connect?: Maybe<DomainWhereUniqueInput>;
  create?: Maybe<DomainCreateWithoutTeamInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<DomainUpdateWithoutTeamDataInput>;
  upsert?: Maybe<DomainUpsertWithoutTeamInput>;
};

export type DomainUpdateWithoutSchoolsDataInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Team?: Maybe<TeamUpdateManyWithoutDomainInput>;
};

export type DomainUpdateWithoutTeamDataInput = {
  approved?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  schools?: Maybe<SchoolUpdateManyWithoutDomainInput>;
};

export type DomainUpsertWithoutSchoolsInput = {
  create: DomainCreateWithoutSchoolsInput;
  update: DomainUpdateWithoutSchoolsDataInput;
};

export type DomainUpsertWithoutTeamInput = {
  create: DomainCreateWithoutTeamInput;
  update: DomainUpdateWithoutTeamDataInput;
};

export type DomainWhereInput = {
  AND?: Maybe<Array<DomainWhereInput>>;
  approved?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<DomainWhereInput>>;
  OR?: Maybe<Array<DomainWhereInput>>;
  schools?: Maybe<SchoolListRelationFilter>;
  Team?: Maybe<TeamListRelationFilter>;
};

export type DomainWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other',
  Unkown = 'Unkown'
}

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};


export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite?: Maybe<Team>;
  addBallotRun?: Maybe<BallotRun>;
  changePassword?: Maybe<ResponseLogin>;
  checkVerification?: Maybe<ResponseLogin>;
  createInvitedUser?: Maybe<User>;
  createOneSchool: School;
  createOneTeam: Team;
  createUser: User;
  deleteOneSchool?: Maybe<School>;
  deleteOneTeam?: Maybe<Team>;
  emailVerification?: Maybe<ResponseLogin>;
  endBallotRun?: Maybe<BallotRun>;
  inviteStudents?: Maybe<Team>;
  login?: Maybe<ResponseLogin>;
  removeBallotRun?: Maybe<Response>;
  setSchool?: Maybe<User>;
  startBallotRun?: Maybe<BallotRun>;
  updateUser?: Maybe<User>;
  vote?: Maybe<Vote>;
  voteCode?: Maybe<Response>;
};


export type MutationAcceptInviteArgs = {
  invite?: Maybe<Scalars['String']>;
};


export type MutationAddBallotRunArgs = {
  ballotId: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  password?: Maybe<Scalars['String']>;
};


export type MutationCheckVerificationArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateInvitedUserArgs = {
  email?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationCreateOneSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteOneTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationEmailVerificationArgs = {
  email: Scalars['String'];
  purpose: Scalars['String'];
};


export type MutationEndBallotRunArgs = {
  ballotRunId: Scalars['String'];
};


export type MutationInviteStudentsArgs = {
  emails: Array<Scalars['String']>;
  team: Scalars['String'];
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationRemoveBallotRunArgs = {
  ballotRunId: Scalars['String'];
};


export type MutationSetSchoolArgs = {
  school: Scalars['String'];
};


export type MutationStartBallotRunArgs = {
  ballotRunId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationVoteArgs = {
  ballotId: Scalars['String'];
  vote: Scalars['Int'];
};


export type MutationVoteCodeArgs = {
  ballotRunId: Scalars['String'];
  code: Scalars['String'];
  vote: Scalars['Int'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type OptionCreateManyWithoutBallotInput = {
  connect?: Maybe<Array<OptionWhereUniqueInput>>;
  create?: Maybe<Array<OptionCreateWithoutBallotInput>>;
};

export type OptionCreateWithoutBallotInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  vote: Scalars['Int'];
};

export type OptionListRelationFilter = {
  every?: Maybe<OptionWhereInput>;
  none?: Maybe<OptionWhereInput>;
  some?: Maybe<OptionWhereInput>;
};

export type OptionScalarWhereInput = {
  AND?: Maybe<Array<OptionScalarWhereInput>>;
  ballotId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<OptionScalarWhereInput>>;
  OR?: Maybe<Array<OptionScalarWhereInput>>;
  title?: Maybe<StringFilter>;
  vote?: Maybe<IntFilter>;
};

export type OptionUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  vote?: Maybe<IntFieldUpdateOperationsInput>;
};

export type OptionUpdateManyWithoutBallotInput = {
  connect?: Maybe<Array<OptionWhereUniqueInput>>;
  create?: Maybe<Array<OptionCreateWithoutBallotInput>>;
  delete?: Maybe<Array<OptionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OptionScalarWhereInput>>;
  disconnect?: Maybe<Array<OptionWhereUniqueInput>>;
  set?: Maybe<Array<OptionWhereUniqueInput>>;
  update?: Maybe<Array<OptionUpdateWithWhereUniqueWithoutBallotInput>>;
  updateMany?: Maybe<Array<OptionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OptionUpsertWithWhereUniqueWithoutBallotInput>>;
};

export type OptionUpdateManyWithWhereNestedInput = {
  data: OptionUpdateManyDataInput;
  where: OptionScalarWhereInput;
};

export type OptionUpdateWithoutBallotDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  vote?: Maybe<IntFieldUpdateOperationsInput>;
};

export type OptionUpdateWithWhereUniqueWithoutBallotInput = {
  data: OptionUpdateWithoutBallotDataInput;
  where: OptionWhereUniqueInput;
};

export type OptionUpsertWithWhereUniqueWithoutBallotInput = {
  create: OptionCreateWithoutBallotInput;
  update: OptionUpdateWithoutBallotDataInput;
  where: OptionWhereUniqueInput;
};

export type OptionWhereInput = {
  AND?: Maybe<Array<OptionWhereInput>>;
  ballot?: Maybe<BallotWhereInput>;
  ballotId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<OptionWhereInput>>;
  OR?: Maybe<Array<OptionWhereInput>>;
  title?: Maybe<StringFilter>;
  vote?: Maybe<IntFilter>;
};

export type OptionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  ballot?: Maybe<Ballot>;
  ballots: Array<Ballot>;
  getBallotRuns?: Maybe<Array<BallotRun>>;
  me?: Maybe<User>;
  school?: Maybe<School>;
  schools: Array<School>;
  team?: Maybe<Team>;
  teams: Array<Team>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryBallotArgs = {
  where: BallotWhereUniqueInput;
};


export type QueryBallotsArgs = {
  after?: Maybe<BallotWhereUniqueInput>;
  before?: Maybe<BallotWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BallotOrderByInput>>;
  where?: Maybe<BallotWhereInput>;
};


export type QueryGetBallotRunsArgs = {
  teamId: Scalars['String'];
};


export type QuerySchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type QuerySchoolsArgs = {
  after?: Maybe<SchoolWhereUniqueInput>;
  before?: Maybe<SchoolWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SchoolOrderByInput>>;
  where?: Maybe<SchoolWhereInput>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  after?: Maybe<TeamWhereUniqueInput>;
  before?: Maybe<TeamWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  where?: Maybe<UserWhereInput>;
};

export type Reaction = {
  __typename?: 'Reaction';
  emoij: Scalars['String'];
  id: Scalars['String'];
  thread?: Maybe<Thread>;
  user: User;
};

export type ReactionCreateManyWithoutThreadInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  create?: Maybe<Array<ReactionCreateWithoutThreadInput>>;
};

export type ReactionCreateManyWithoutUserInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  create?: Maybe<Array<ReactionCreateWithoutUserInput>>;
};

export type ReactionCreateWithoutThreadInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  emoij: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutReactionsInput;
};

export type ReactionCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  emoij: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  thread?: Maybe<ThreadCreateOneWithoutReactionsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReactionListRelationFilter = {
  every?: Maybe<ReactionWhereInput>;
  none?: Maybe<ReactionWhereInput>;
  some?: Maybe<ReactionWhereInput>;
};

export type ReactionScalarWhereInput = {
  AND?: Maybe<Array<ReactionScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  emoij?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReactionScalarWhereInput>>;
  OR?: Maybe<Array<ReactionScalarWhereInput>>;
  threadId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type ReactionUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  emoij?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReactionUpdateManyWithoutThreadInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  create?: Maybe<Array<ReactionCreateWithoutThreadInput>>;
  delete?: Maybe<Array<ReactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReactionScalarWhereInput>>;
  disconnect?: Maybe<Array<ReactionWhereUniqueInput>>;
  set?: Maybe<Array<ReactionWhereUniqueInput>>;
  update?: Maybe<Array<ReactionUpdateWithWhereUniqueWithoutThreadInput>>;
  updateMany?: Maybe<Array<ReactionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReactionUpsertWithWhereUniqueWithoutThreadInput>>;
};

export type ReactionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  create?: Maybe<Array<ReactionCreateWithoutUserInput>>;
  delete?: Maybe<Array<ReactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReactionScalarWhereInput>>;
  disconnect?: Maybe<Array<ReactionWhereUniqueInput>>;
  set?: Maybe<Array<ReactionWhereUniqueInput>>;
  update?: Maybe<Array<ReactionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ReactionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReactionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReactionUpdateManyWithWhereNestedInput = {
  data: ReactionUpdateManyDataInput;
  where: ReactionScalarWhereInput;
};

export type ReactionUpdateWithoutThreadDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  emoij?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutReactionsInput>;
};

export type ReactionUpdateWithoutUserDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  emoij?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  thread?: Maybe<ThreadUpdateOneWithoutReactionsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReactionUpdateWithWhereUniqueWithoutThreadInput = {
  data: ReactionUpdateWithoutThreadDataInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
  data: ReactionUpdateWithoutUserDataInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpsertWithWhereUniqueWithoutThreadInput = {
  create: ReactionCreateWithoutThreadInput;
  update: ReactionUpdateWithoutThreadDataInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
  create: ReactionCreateWithoutUserInput;
  update: ReactionUpdateWithoutUserDataInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionWhereInput = {
  AND?: Maybe<Array<ReactionWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  emoij?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReactionWhereInput>>;
  OR?: Maybe<Array<ReactionWhereInput>>;
  thread?: Maybe<ThreadWhereInput>;
  threadId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type ReactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  error?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ResponseLogin = {
  __typename?: 'ResponseLogin';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum Role {
  Admin = 'Admin',
  Principal = 'Principal',
  Student = 'Student',
  Teacher = 'Teacher',
  User = 'User'
}

export type School = {
  __typename?: 'School';
  address: Scalars['String'];
  canton: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['String'];
  members: Array<User>;
  name: Scalars['String'];
  teams: Array<Team>;
  zip: Scalars['String'];
};


export type SchoolMembersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SchoolTeamsArgs = {
  after?: Maybe<TeamWhereUniqueInput>;
  before?: Maybe<TeamWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SchoolCreateInput = {
  address?: Maybe<Scalars['String']>;
  ballots?: Maybe<BallotCreateManyWithoutSchoolInput>;
  canton?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutSchoolsInput>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutSchoolInput>;
  name: Scalars['String'];
  teams?: Maybe<TeamCreateManyWithoutSchoolInput>;
  type?: Maybe<Scalars['String']>;
  Vote?: Maybe<VoteCreateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedCreateManyWithoutSchoolInput>;
  zip?: Maybe<Scalars['String']>;
};

export type SchoolCreateManyWithoutDomainInput = {
  connect?: Maybe<Array<SchoolWhereUniqueInput>>;
  create?: Maybe<Array<SchoolCreateWithoutDomainInput>>;
};

export type SchoolCreateOneWithoutBallotsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutBallotsInput>;
};

export type SchoolCreateOneWithoutMembersInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutMembersInput>;
};

export type SchoolCreateOneWithoutTeamsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutTeamsInput>;
};

export type SchoolCreateOneWithoutVotedInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutVotedInput>;
};

export type SchoolCreateOneWithoutVoteInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutVoteInput>;
};

export type SchoolCreateWithoutBallotsInput = {
  address?: Maybe<Scalars['String']>;
  canton?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutSchoolsInput>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutSchoolInput>;
  name: Scalars['String'];
  teams?: Maybe<TeamCreateManyWithoutSchoolInput>;
  type?: Maybe<Scalars['String']>;
  Vote?: Maybe<VoteCreateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedCreateManyWithoutSchoolInput>;
  zip?: Maybe<Scalars['String']>;
};

export type SchoolCreateWithoutDomainInput = {
  address?: Maybe<Scalars['String']>;
  ballots?: Maybe<BallotCreateManyWithoutSchoolInput>;
  canton?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutSchoolInput>;
  name: Scalars['String'];
  teams?: Maybe<TeamCreateManyWithoutSchoolInput>;
  type?: Maybe<Scalars['String']>;
  Vote?: Maybe<VoteCreateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedCreateManyWithoutSchoolInput>;
  zip?: Maybe<Scalars['String']>;
};

export type SchoolCreateWithoutMembersInput = {
  address?: Maybe<Scalars['String']>;
  ballots?: Maybe<BallotCreateManyWithoutSchoolInput>;
  canton?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutSchoolsInput>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teams?: Maybe<TeamCreateManyWithoutSchoolInput>;
  type?: Maybe<Scalars['String']>;
  Vote?: Maybe<VoteCreateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedCreateManyWithoutSchoolInput>;
  zip?: Maybe<Scalars['String']>;
};

export type SchoolCreateWithoutTeamsInput = {
  address?: Maybe<Scalars['String']>;
  ballots?: Maybe<BallotCreateManyWithoutSchoolInput>;
  canton?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutSchoolsInput>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutSchoolInput>;
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  Vote?: Maybe<VoteCreateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedCreateManyWithoutSchoolInput>;
  zip?: Maybe<Scalars['String']>;
};

export type SchoolCreateWithoutVotedInput = {
  address?: Maybe<Scalars['String']>;
  ballots?: Maybe<BallotCreateManyWithoutSchoolInput>;
  canton?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutSchoolsInput>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutSchoolInput>;
  name: Scalars['String'];
  teams?: Maybe<TeamCreateManyWithoutSchoolInput>;
  type?: Maybe<Scalars['String']>;
  Vote?: Maybe<VoteCreateManyWithoutSchoolInput>;
  zip?: Maybe<Scalars['String']>;
};

export type SchoolCreateWithoutVoteInput = {
  address?: Maybe<Scalars['String']>;
  ballots?: Maybe<BallotCreateManyWithoutSchoolInput>;
  canton?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutSchoolsInput>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutSchoolInput>;
  name: Scalars['String'];
  teams?: Maybe<TeamCreateManyWithoutSchoolInput>;
  type?: Maybe<Scalars['String']>;
  Voted?: Maybe<VotedCreateManyWithoutSchoolInput>;
  zip?: Maybe<Scalars['String']>;
};

export type SchoolListRelationFilter = {
  every?: Maybe<SchoolWhereInput>;
  none?: Maybe<SchoolWhereInput>;
  some?: Maybe<SchoolWhereInput>;
};

export type SchoolOrderByInput = {
  address?: Maybe<SortOrder>;
  canton?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  domainId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  zip?: Maybe<SortOrder>;
};

export type SchoolScalarWhereInput = {
  address?: Maybe<StringFilter>;
  AND?: Maybe<Array<SchoolScalarWhereInput>>;
  canton?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  domainId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SchoolScalarWhereInput>>;
  OR?: Maybe<Array<SchoolScalarWhereInput>>;
  type?: Maybe<StringFilter>;
  zip?: Maybe<StringFilter>;
};

export type SchoolUpdateManyDataInput = {
  address?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  zip?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateManyWithoutDomainInput = {
  connect?: Maybe<Array<SchoolWhereUniqueInput>>;
  create?: Maybe<Array<SchoolCreateWithoutDomainInput>>;
  delete?: Maybe<Array<SchoolWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SchoolScalarWhereInput>>;
  disconnect?: Maybe<Array<SchoolWhereUniqueInput>>;
  set?: Maybe<Array<SchoolWhereUniqueInput>>;
  update?: Maybe<Array<SchoolUpdateWithWhereUniqueWithoutDomainInput>>;
  updateMany?: Maybe<Array<SchoolUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SchoolUpsertWithWhereUniqueWithoutDomainInput>>;
};

export type SchoolUpdateManyWithWhereNestedInput = {
  data: SchoolUpdateManyDataInput;
  where: SchoolScalarWhereInput;
};

export type SchoolUpdateOneRequiredWithoutTeamsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutTeamsInput>;
  update?: Maybe<SchoolUpdateWithoutTeamsDataInput>;
  upsert?: Maybe<SchoolUpsertWithoutTeamsInput>;
};

export type SchoolUpdateOneWithoutBallotsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutBallotsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SchoolUpdateWithoutBallotsDataInput>;
  upsert?: Maybe<SchoolUpsertWithoutBallotsInput>;
};

export type SchoolUpdateOneWithoutMembersInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutMembersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SchoolUpdateWithoutMembersDataInput>;
  upsert?: Maybe<SchoolUpsertWithoutMembersInput>;
};

export type SchoolUpdateOneWithoutVotedInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutVotedInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SchoolUpdateWithoutVotedDataInput>;
  upsert?: Maybe<SchoolUpsertWithoutVotedInput>;
};

export type SchoolUpdateOneWithoutVoteInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  create?: Maybe<SchoolCreateWithoutVoteInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SchoolUpdateWithoutVoteDataInput>;
  upsert?: Maybe<SchoolUpsertWithoutVoteInput>;
};

export type SchoolUpdateWithoutBallotsDataInput = {
  address?: Maybe<StringFieldUpdateOperationsInput>;
  canton?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutSchoolsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutSchoolInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teams?: Maybe<TeamUpdateManyWithoutSchoolInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  Vote?: Maybe<VoteUpdateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedUpdateManyWithoutSchoolInput>;
  zip?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutDomainDataInput = {
  address?: Maybe<StringFieldUpdateOperationsInput>;
  ballots?: Maybe<BallotUpdateManyWithoutSchoolInput>;
  canton?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutSchoolInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teams?: Maybe<TeamUpdateManyWithoutSchoolInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  Vote?: Maybe<VoteUpdateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedUpdateManyWithoutSchoolInput>;
  zip?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutMembersDataInput = {
  address?: Maybe<StringFieldUpdateOperationsInput>;
  ballots?: Maybe<BallotUpdateManyWithoutSchoolInput>;
  canton?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutSchoolsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teams?: Maybe<TeamUpdateManyWithoutSchoolInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  Vote?: Maybe<VoteUpdateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedUpdateManyWithoutSchoolInput>;
  zip?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutTeamsDataInput = {
  address?: Maybe<StringFieldUpdateOperationsInput>;
  ballots?: Maybe<BallotUpdateManyWithoutSchoolInput>;
  canton?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutSchoolsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutSchoolInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  Vote?: Maybe<VoteUpdateManyWithoutSchoolInput>;
  Voted?: Maybe<VotedUpdateManyWithoutSchoolInput>;
  zip?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutVoteDataInput = {
  address?: Maybe<StringFieldUpdateOperationsInput>;
  ballots?: Maybe<BallotUpdateManyWithoutSchoolInput>;
  canton?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutSchoolsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutSchoolInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teams?: Maybe<TeamUpdateManyWithoutSchoolInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  Voted?: Maybe<VotedUpdateManyWithoutSchoolInput>;
  zip?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutVotedDataInput = {
  address?: Maybe<StringFieldUpdateOperationsInput>;
  ballots?: Maybe<BallotUpdateManyWithoutSchoolInput>;
  canton?: Maybe<StringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutSchoolsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutSchoolInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teams?: Maybe<TeamUpdateManyWithoutSchoolInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  Vote?: Maybe<VoteUpdateManyWithoutSchoolInput>;
  zip?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithWhereUniqueWithoutDomainInput = {
  data: SchoolUpdateWithoutDomainDataInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolUpsertWithoutBallotsInput = {
  create: SchoolCreateWithoutBallotsInput;
  update: SchoolUpdateWithoutBallotsDataInput;
};

export type SchoolUpsertWithoutMembersInput = {
  create: SchoolCreateWithoutMembersInput;
  update: SchoolUpdateWithoutMembersDataInput;
};

export type SchoolUpsertWithoutTeamsInput = {
  create: SchoolCreateWithoutTeamsInput;
  update: SchoolUpdateWithoutTeamsDataInput;
};

export type SchoolUpsertWithoutVotedInput = {
  create: SchoolCreateWithoutVotedInput;
  update: SchoolUpdateWithoutVotedDataInput;
};

export type SchoolUpsertWithoutVoteInput = {
  create: SchoolCreateWithoutVoteInput;
  update: SchoolUpdateWithoutVoteDataInput;
};

export type SchoolUpsertWithWhereUniqueWithoutDomainInput = {
  create: SchoolCreateWithoutDomainInput;
  update: SchoolUpdateWithoutDomainDataInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolWhereInput = {
  address?: Maybe<StringFilter>;
  AND?: Maybe<Array<SchoolWhereInput>>;
  ballots?: Maybe<BallotListRelationFilter>;
  canton?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  domain?: Maybe<DomainWhereInput>;
  domainId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  members?: Maybe<UserListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SchoolWhereInput>>;
  OR?: Maybe<Array<SchoolWhereInput>>;
  teams?: Maybe<TeamListRelationFilter>;
  type?: Maybe<StringFilter>;
  Vote?: Maybe<VoteListRelationFilter>;
  Voted?: Maybe<VotedListRelationFilter>;
  zip?: Maybe<StringFilter>;
};

export type SchoolWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  ballots: Array<Ballot>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<Domain>;
  id: Scalars['String'];
  invite?: Maybe<Scalars['String']>;
  members: Array<User>;
  name: Scalars['String'];
  school: School;
  teacher: User;
};


export type TeamBallotsArgs = {
  after?: Maybe<BallotWhereUniqueInput>;
  before?: Maybe<BallotWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TeamMembersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TeamCreateInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateManyWithoutDomainInput = {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  create?: Maybe<Array<TeamCreateWithoutDomainInput>>;
};

export type TeamCreateManyWithoutSchoolInput = {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  create?: Maybe<Array<TeamCreateWithoutSchoolInput>>;
};

export type TeamCreateManyWithoutTeacherInput = {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  create?: Maybe<Array<TeamCreateWithoutTeacherInput>>;
};

export type TeamCreateOneWithoutBallotRunsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutBallotRunsInput>;
};

export type TeamCreateOneWithoutBallotsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutBallotsInput>;
};

export type TeamCreateOneWithoutMembersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutMembersInput>;
};

export type TeamCreateOneWithoutUserInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutUserInput>;
};

export type TeamCreateOneWithoutVotedInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutVotedInput>;
};

export type TeamCreateOneWithoutVoteInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutVoteInput>;
};

export type TeamCreateWithoutBallotRunsInput = {
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutBallotsInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutDomainInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutMembersInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutSchoolInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutTeacherInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutUserInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutVotedInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Vote?: Maybe<VoteCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamCreateWithoutVoteInput = {
  BallotRuns?: Maybe<BallotRunCreateManyWithoutTeamInput>;
  ballots?: Maybe<BallotCreateManyWithoutTeamInput>;
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainCreateOneWithoutTeamInput>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
  members?: Maybe<UserCreateManyWithoutTeamInput>;
  name: Scalars['String'];
  school: SchoolCreateOneWithoutTeamsInput;
  teacher: UserCreateOneWithoutTeachesInput;
  User?: Maybe<UserCreateManyWithoutTeamInput>;
  Voted?: Maybe<VotedCreateManyWithoutTeamInput>;
  year?: Maybe<Scalars['Int']>;
};

export type TeamListRelationFilter = {
  every?: Maybe<TeamWhereInput>;
  none?: Maybe<TeamWhereInput>;
  some?: Maybe<TeamWhereInput>;
};

export type TeamOrderByInput = {
  code?: Maybe<SortOrder>;
  domainId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  invite?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  teacherId?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type TeamScalarWhereInput = {
  AND?: Maybe<Array<TeamScalarWhereInput>>;
  code?: Maybe<StringNullableFilter>;
  domainId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  invite?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TeamScalarWhereInput>>;
  OR?: Maybe<Array<TeamScalarWhereInput>>;
  schoolId?: Maybe<StringFilter>;
  teacherId?: Maybe<StringFilter>;
  year?: Maybe<IntNullableFilter>;
};

export type TeamUpdateManyDataInput = {
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateManyWithoutDomainInput = {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  create?: Maybe<Array<TeamCreateWithoutDomainInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutDomainInput>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutDomainInput>>;
};

export type TeamUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  create?: Maybe<Array<TeamCreateWithoutSchoolInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type TeamUpdateManyWithoutTeacherInput = {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  create?: Maybe<Array<TeamCreateWithoutTeacherInput>>;
  delete?: Maybe<Array<TeamWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
  set?: Maybe<Array<TeamWhereUniqueInput>>;
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutTeacherInput>>;
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutTeacherInput>>;
};

export type TeamUpdateManyWithWhereNestedInput = {
  data: TeamUpdateManyDataInput;
  where: TeamScalarWhereInput;
};

export type TeamUpdateOneRequiredWithoutBallotRunsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutBallotRunsInput>;
  update?: Maybe<TeamUpdateWithoutBallotRunsDataInput>;
  upsert?: Maybe<TeamUpsertWithoutBallotRunsInput>;
};

export type TeamUpdateOneWithoutBallotsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutBallotsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutBallotsDataInput>;
  upsert?: Maybe<TeamUpsertWithoutBallotsInput>;
};

export type TeamUpdateOneWithoutMembersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutMembersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutMembersDataInput>;
  upsert?: Maybe<TeamUpsertWithoutMembersInput>;
};

export type TeamUpdateOneWithoutUserInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutUserDataInput>;
  upsert?: Maybe<TeamUpsertWithoutUserInput>;
};

export type TeamUpdateOneWithoutVotedInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutVotedInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutVotedDataInput>;
  upsert?: Maybe<TeamUpsertWithoutVotedInput>;
};

export type TeamUpdateOneWithoutVoteInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  create?: Maybe<TeamCreateWithoutVoteInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutVoteDataInput>;
  upsert?: Maybe<TeamUpsertWithoutVoteInput>;
};

export type TeamUpdateWithoutBallotRunsDataInput = {
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutBallotsDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutDomainDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutMembersDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutSchoolDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutTeacherDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutUserDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutVoteDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Voted?: Maybe<VotedUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutVotedDataInput = {
  BallotRuns?: Maybe<BallotRunUpdateManyWithoutTeamInput>;
  ballots?: Maybe<BallotUpdateManyWithoutTeamInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  domain?: Maybe<DomainUpdateOneWithoutTeamInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  invite?: Maybe<NullableStringFieldUpdateOperationsInput>;
  members?: Maybe<UserUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutTeamsInput>;
  teacher?: Maybe<UserUpdateOneRequiredWithoutTeachesInput>;
  User?: Maybe<UserUpdateManyWithoutTeamInput>;
  Vote?: Maybe<VoteUpdateManyWithoutTeamInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type TeamUpdateWithWhereUniqueWithoutDomainInput = {
  data: TeamUpdateWithoutDomainDataInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateWithWhereUniqueWithoutSchoolInput = {
  data: TeamUpdateWithoutSchoolDataInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateWithWhereUniqueWithoutTeacherInput = {
  data: TeamUpdateWithoutTeacherDataInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpsertWithoutBallotRunsInput = {
  create: TeamCreateWithoutBallotRunsInput;
  update: TeamUpdateWithoutBallotRunsDataInput;
};

export type TeamUpsertWithoutBallotsInput = {
  create: TeamCreateWithoutBallotsInput;
  update: TeamUpdateWithoutBallotsDataInput;
};

export type TeamUpsertWithoutMembersInput = {
  create: TeamCreateWithoutMembersInput;
  update: TeamUpdateWithoutMembersDataInput;
};

export type TeamUpsertWithoutUserInput = {
  create: TeamCreateWithoutUserInput;
  update: TeamUpdateWithoutUserDataInput;
};

export type TeamUpsertWithoutVotedInput = {
  create: TeamCreateWithoutVotedInput;
  update: TeamUpdateWithoutVotedDataInput;
};

export type TeamUpsertWithoutVoteInput = {
  create: TeamCreateWithoutVoteInput;
  update: TeamUpdateWithoutVoteDataInput;
};

export type TeamUpsertWithWhereUniqueWithoutDomainInput = {
  create: TeamCreateWithoutDomainInput;
  update: TeamUpdateWithoutDomainDataInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpsertWithWhereUniqueWithoutSchoolInput = {
  create: TeamCreateWithoutSchoolInput;
  update: TeamUpdateWithoutSchoolDataInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpsertWithWhereUniqueWithoutTeacherInput = {
  create: TeamCreateWithoutTeacherInput;
  update: TeamUpdateWithoutTeacherDataInput;
  where: TeamWhereUniqueInput;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>;
  BallotRuns?: Maybe<BallotRunListRelationFilter>;
  ballots?: Maybe<BallotListRelationFilter>;
  code?: Maybe<StringNullableFilter>;
  domain?: Maybe<DomainWhereInput>;
  domainId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  invite?: Maybe<StringNullableFilter>;
  members?: Maybe<UserListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TeamWhereInput>>;
  OR?: Maybe<Array<TeamWhereInput>>;
  school?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<StringFilter>;
  teacher?: Maybe<UserWhereInput>;
  teacherId?: Maybe<StringFilter>;
  User?: Maybe<UserListRelationFilter>;
  Vote?: Maybe<VoteListRelationFilter>;
  Voted?: Maybe<VotedListRelationFilter>;
  year?: Maybe<IntNullableFilter>;
};

export type TeamWhereUniqueInput = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invite?: Maybe<Scalars['String']>;
};

export type Thread = {
  __typename?: 'Thread';
  attachments: Array<Attachment>;
  children: Array<Thread>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  parent?: Maybe<Thread>;
  reactions: Array<Reaction>;
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type ThreadAttachmentsArgs = {
  after?: Maybe<AttachmentWhereUniqueInput>;
  before?: Maybe<AttachmentWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ThreadChildrenArgs = {
  after?: Maybe<ThreadWhereUniqueInput>;
  before?: Maybe<ThreadWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ThreadReactionsArgs = {
  after?: Maybe<ReactionWhereUniqueInput>;
  before?: Maybe<ReactionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ThreadCreateManyWithoutParentInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutParentInput>>;
};

export type ThreadCreateManyWithoutUserInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutUserInput>>;
};

export type ThreadCreateOneWithoutAttachmentsInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutAttachmentsInput>;
};

export type ThreadCreateOneWithoutBallotInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutBallotInput>;
};

export type ThreadCreateOneWithoutChildrenInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutChildrenInput>;
};

export type ThreadCreateOneWithoutReactionsInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutReactionsInput>;
};

export type ThreadCreateWithoutAttachmentsInput = {
  ballot?: Maybe<BallotCreateOneWithoutThreadInput>;
  children?: Maybe<ThreadCreateManyWithoutParentInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  parent?: Maybe<ThreadCreateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionCreateManyWithoutThreadInput>;
  ref?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutThreadsInput;
};

export type ThreadCreateWithoutBallotInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutThreadInput>;
  children?: Maybe<ThreadCreateManyWithoutParentInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  parent?: Maybe<ThreadCreateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionCreateManyWithoutThreadInput>;
  ref?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutThreadsInput;
};

export type ThreadCreateWithoutChildrenInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutThreadInput>;
  ballot?: Maybe<BallotCreateOneWithoutThreadInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  parent?: Maybe<ThreadCreateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionCreateManyWithoutThreadInput>;
  ref?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutThreadsInput;
};

export type ThreadCreateWithoutParentInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutThreadInput>;
  ballot?: Maybe<BallotCreateOneWithoutThreadInput>;
  children?: Maybe<ThreadCreateManyWithoutParentInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutThreadInput>;
  ref?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutThreadsInput;
};

export type ThreadCreateWithoutReactionsInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutThreadInput>;
  ballot?: Maybe<BallotCreateOneWithoutThreadInput>;
  children?: Maybe<ThreadCreateManyWithoutParentInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  parent?: Maybe<ThreadCreateOneWithoutChildrenInput>;
  ref?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutThreadsInput;
};

export type ThreadCreateWithoutUserInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutThreadInput>;
  ballot?: Maybe<BallotCreateOneWithoutThreadInput>;
  children?: Maybe<ThreadCreateManyWithoutParentInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  parent?: Maybe<ThreadCreateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionCreateManyWithoutThreadInput>;
  ref?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThreadListRelationFilter = {
  every?: Maybe<ThreadWhereInput>;
  none?: Maybe<ThreadWhereInput>;
  some?: Maybe<ThreadWhereInput>;
};

export type ThreadScalarWhereInput = {
  AND?: Maybe<Array<ThreadScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ThreadScalarWhereInput>>;
  OR?: Maybe<Array<ThreadScalarWhereInput>>;
  parentId?: Maybe<StringNullableFilter>;
  ref?: Maybe<StringNullableFilter>;
  text?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type ThreadUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ref?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ThreadUpdateManyWithoutParentInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutParentInput>>;
  delete?: Maybe<Array<ThreadWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ThreadScalarWhereInput>>;
  disconnect?: Maybe<Array<ThreadWhereUniqueInput>>;
  set?: Maybe<Array<ThreadWhereUniqueInput>>;
  update?: Maybe<Array<ThreadUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: Maybe<Array<ThreadUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ThreadUpsertWithWhereUniqueWithoutParentInput>>;
};

export type ThreadUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<ThreadWhereUniqueInput>>;
  create?: Maybe<Array<ThreadCreateWithoutUserInput>>;
  delete?: Maybe<Array<ThreadWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ThreadScalarWhereInput>>;
  disconnect?: Maybe<Array<ThreadWhereUniqueInput>>;
  set?: Maybe<Array<ThreadWhereUniqueInput>>;
  update?: Maybe<Array<ThreadUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ThreadUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ThreadUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ThreadUpdateManyWithWhereNestedInput = {
  data: ThreadUpdateManyDataInput;
  where: ThreadScalarWhereInput;
};

export type ThreadUpdateOneWithoutAttachmentsInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutAttachmentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ThreadUpdateWithoutAttachmentsDataInput>;
  upsert?: Maybe<ThreadUpsertWithoutAttachmentsInput>;
};

export type ThreadUpdateOneWithoutBallotInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutBallotInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ThreadUpdateWithoutBallotDataInput>;
  upsert?: Maybe<ThreadUpsertWithoutBallotInput>;
};

export type ThreadUpdateOneWithoutChildrenInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutChildrenInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ThreadUpdateWithoutChildrenDataInput>;
  upsert?: Maybe<ThreadUpsertWithoutChildrenInput>;
};

export type ThreadUpdateOneWithoutReactionsInput = {
  connect?: Maybe<ThreadWhereUniqueInput>;
  create?: Maybe<ThreadCreateWithoutReactionsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ThreadUpdateWithoutReactionsDataInput>;
  upsert?: Maybe<ThreadUpsertWithoutReactionsInput>;
};

export type ThreadUpdateWithoutAttachmentsDataInput = {
  ballot?: Maybe<BallotUpdateOneWithoutThreadInput>;
  children?: Maybe<ThreadUpdateManyWithoutParentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ThreadUpdateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutThreadInput>;
  ref?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateWithoutBallotDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutThreadInput>;
  children?: Maybe<ThreadUpdateManyWithoutParentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ThreadUpdateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutThreadInput>;
  ref?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateWithoutChildrenDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutThreadInput>;
  ballot?: Maybe<BallotUpdateOneWithoutThreadInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ThreadUpdateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutThreadInput>;
  ref?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateWithoutParentDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutThreadInput>;
  ballot?: Maybe<BallotUpdateOneWithoutThreadInput>;
  children?: Maybe<ThreadUpdateManyWithoutParentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutThreadInput>;
  ref?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateWithoutReactionsDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutThreadInput>;
  ballot?: Maybe<BallotUpdateOneWithoutThreadInput>;
  children?: Maybe<ThreadUpdateManyWithoutParentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ThreadUpdateOneWithoutChildrenInput>;
  ref?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutThreadsInput>;
};

export type ThreadUpdateWithoutUserDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutThreadInput>;
  ballot?: Maybe<BallotUpdateOneWithoutThreadInput>;
  children?: Maybe<ThreadUpdateManyWithoutParentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ThreadUpdateOneWithoutChildrenInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutThreadInput>;
  ref?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ThreadUpdateWithWhereUniqueWithoutParentInput = {
  data: ThreadUpdateWithoutParentDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadUpdateWithWhereUniqueWithoutUserInput = {
  data: ThreadUpdateWithoutUserDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadUpsertWithoutAttachmentsInput = {
  create: ThreadCreateWithoutAttachmentsInput;
  update: ThreadUpdateWithoutAttachmentsDataInput;
};

export type ThreadUpsertWithoutBallotInput = {
  create: ThreadCreateWithoutBallotInput;
  update: ThreadUpdateWithoutBallotDataInput;
};

export type ThreadUpsertWithoutChildrenInput = {
  create: ThreadCreateWithoutChildrenInput;
  update: ThreadUpdateWithoutChildrenDataInput;
};

export type ThreadUpsertWithoutReactionsInput = {
  create: ThreadCreateWithoutReactionsInput;
  update: ThreadUpdateWithoutReactionsDataInput;
};

export type ThreadUpsertWithWhereUniqueWithoutParentInput = {
  create: ThreadCreateWithoutParentInput;
  update: ThreadUpdateWithoutParentDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadUpsertWithWhereUniqueWithoutUserInput = {
  create: ThreadCreateWithoutUserInput;
  update: ThreadUpdateWithoutUserDataInput;
  where: ThreadWhereUniqueInput;
};

export type ThreadWhereInput = {
  AND?: Maybe<Array<ThreadWhereInput>>;
  attachments?: Maybe<AttachmentListRelationFilter>;
  ballot?: Maybe<BallotWhereInput>;
  children?: Maybe<ThreadListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ThreadWhereInput>>;
  OR?: Maybe<Array<ThreadWhereInput>>;
  parent?: Maybe<ThreadWhereInput>;
  parentId?: Maybe<StringNullableFilter>;
  reactions?: Maybe<ReactionListRelationFilter>;
  ref?: Maybe<StringNullableFilter>;
  text?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type ThreadWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  attachments: Array<Attachment>;
  ballots: Array<Ballot>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender: Gender;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  reactions: Array<Reaction>;
  role: Role;
  school?: Maybe<School>;
  shortname?: Maybe<Scalars['String']>;
  teaches: Array<Team>;
  team?: Maybe<Team>;
  threads: Array<Thread>;
};


export type UserAttachmentsArgs = {
  after?: Maybe<AttachmentWhereUniqueInput>;
  before?: Maybe<AttachmentWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserBallotsArgs = {
  after?: Maybe<BallotWhereUniqueInput>;
  before?: Maybe<BallotWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserReactionsArgs = {
  after?: Maybe<ReactionWhereUniqueInput>;
  before?: Maybe<ReactionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTeachesArgs = {
  after?: Maybe<TeamWhereUniqueInput>;
  before?: Maybe<TeamWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserThreadsArgs = {
  after?: Maybe<ThreadWhereUniqueInput>;
  before?: Maybe<ThreadWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateManyWithoutSchoolInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutSchoolInput>>;
};

export type UserCreateManyWithoutTeamInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutTeamInput>>;
};

export type UserCreateOneWithoutAttachmentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAttachmentsInput>;
};

export type UserCreateOneWithoutBallotsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutBallotsInput>;
};

export type UserCreateOneWithoutReactionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutReactionsInput>;
};

export type UserCreateOneWithoutTeachesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutTeachesInput>;
};

export type UserCreateOneWithoutThreadsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutThreadsInput>;
};

export type UserCreateOneWithoutVotedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutVotedInput>;
};

export type UserCreateWithoutAttachmentsInput = {
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutBallotsInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutReactionsInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutSchoolInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutTeachesInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutTeamInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutThreadsInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  voted?: Maybe<VotedCreateManyWithoutUserInput>;
  year?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutVotedInput = {
  attachments?: Maybe<AttachmentCreateManyWithoutUserInput>;
  ballots?: Maybe<BallotCreateManyWithoutCreatorInput>;
  canton?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<ReactionCreateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolCreateOneWithoutMembersInput>;
  teaches?: Maybe<TeamCreateManyWithoutTeacherInput>;
  team?: Maybe<TeamCreateOneWithoutUserInput>;
  Team?: Maybe<TeamCreateOneWithoutMembersInput>;
  threads?: Maybe<ThreadCreateManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['Int']>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  canton?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  lastname?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  verified?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  canton?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  lastname?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  password?: Maybe<StringNullableFilter>;
  role?: Maybe<Role>;
  schoolId?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  verified?: Maybe<BoolNullableFilter>;
  year?: Maybe<IntNullableFilter>;
};

export type UserUpdateInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateManyDataInput = {
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutSchoolInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type UserUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutTeamInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  data: UserUpdateManyDataInput;
  where: UserScalarWhereInput;
};

export type UserUpdateOneRequiredWithoutAttachmentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAttachmentsInput>;
  update?: Maybe<UserUpdateWithoutAttachmentsDataInput>;
  upsert?: Maybe<UserUpsertWithoutAttachmentsInput>;
};

export type UserUpdateOneRequiredWithoutReactionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutReactionsInput>;
  update?: Maybe<UserUpdateWithoutReactionsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReactionsInput>;
};

export type UserUpdateOneRequiredWithoutTeachesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutTeachesInput>;
  update?: Maybe<UserUpdateWithoutTeachesDataInput>;
  upsert?: Maybe<UserUpsertWithoutTeachesInput>;
};

export type UserUpdateOneRequiredWithoutThreadsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutThreadsInput>;
  update?: Maybe<UserUpdateWithoutThreadsDataInput>;
  upsert?: Maybe<UserUpsertWithoutThreadsInput>;
};

export type UserUpdateOneRequiredWithoutVotedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutVotedInput>;
  update?: Maybe<UserUpdateWithoutVotedDataInput>;
  upsert?: Maybe<UserUpsertWithoutVotedInput>;
};

export type UserUpdateOneWithoutBallotsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutBallotsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutBallotsDataInput>;
  upsert?: Maybe<UserUpsertWithoutBallotsInput>;
};

export type UserUpdateWithoutAttachmentsDataInput = {
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutBallotsDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReactionsDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSchoolDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTeachesDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTeamDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutThreadsDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  voted?: Maybe<VotedUpdateManyWithoutUserInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutVotedDataInput = {
  attachments?: Maybe<AttachmentUpdateManyWithoutUserInput>;
  ballots?: Maybe<BallotUpdateManyWithoutCreatorInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutUserInput>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolUpdateOneWithoutMembersInput>;
  teaches?: Maybe<TeamUpdateManyWithoutTeacherInput>;
  team?: Maybe<TeamUpdateOneWithoutUserInput>;
  Team?: Maybe<TeamUpdateOneWithoutMembersInput>;
  threads?: Maybe<ThreadUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  verified?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithWhereUniqueWithoutSchoolInput = {
  data: UserUpdateWithoutSchoolDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutTeamInput = {
  data: UserUpdateWithoutTeamDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAttachmentsInput = {
  create: UserCreateWithoutAttachmentsInput;
  update: UserUpdateWithoutAttachmentsDataInput;
};

export type UserUpsertWithoutBallotsInput = {
  create: UserCreateWithoutBallotsInput;
  update: UserUpdateWithoutBallotsDataInput;
};

export type UserUpsertWithoutReactionsInput = {
  create: UserCreateWithoutReactionsInput;
  update: UserUpdateWithoutReactionsDataInput;
};

export type UserUpsertWithoutTeachesInput = {
  create: UserCreateWithoutTeachesInput;
  update: UserUpdateWithoutTeachesDataInput;
};

export type UserUpsertWithoutThreadsInput = {
  create: UserCreateWithoutThreadsInput;
  update: UserUpdateWithoutThreadsDataInput;
};

export type UserUpsertWithoutVotedInput = {
  create: UserCreateWithoutVotedInput;
  update: UserUpdateWithoutVotedDataInput;
};

export type UserUpsertWithWhereUniqueWithoutSchoolInput = {
  create: UserCreateWithoutSchoolInput;
  update: UserUpdateWithoutSchoolDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutTeamInput = {
  create: UserCreateWithoutTeamInput;
  update: UserUpdateWithoutTeamDataInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  attachments?: Maybe<AttachmentListRelationFilter>;
  ballots?: Maybe<BallotListRelationFilter>;
  canton?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  gender?: Maybe<Gender>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  lastname?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  password?: Maybe<StringNullableFilter>;
  reactions?: Maybe<ReactionListRelationFilter>;
  role?: Maybe<Role>;
  school?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<StringNullableFilter>;
  teaches?: Maybe<TeamListRelationFilter>;
  team?: Maybe<TeamWhereInput>;
  Team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringNullableFilter>;
  threads?: Maybe<ThreadListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  verified?: Maybe<BoolNullableFilter>;
  voted?: Maybe<VotedListRelationFilter>;
  year?: Maybe<IntNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Vote = {
  __typename?: 'Vote';
  ballot: Ballot;
  verify?: Maybe<Scalars['String']>;
};

export type VoteCreateManyWithoutBallotInput = {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  create?: Maybe<Array<VoteCreateWithoutBallotInput>>;
};

export type VoteCreateManyWithoutSchoolInput = {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  create?: Maybe<Array<VoteCreateWithoutSchoolInput>>;
};

export type VoteCreateManyWithoutTeamInput = {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  create?: Maybe<Array<VoteCreateWithoutTeamInput>>;
};

export type VoteCreateWithoutBallotInput = {
  canton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolCreateOneWithoutVoteInput>;
  schooltype?: Maybe<Scalars['String']>;
  team?: Maybe<TeamCreateOneWithoutVoteInput>;
  verify?: Maybe<Scalars['String']>;
  vote: Scalars['Int'];
  year?: Maybe<Scalars['Int']>;
};

export type VoteCreateWithoutSchoolInput = {
  ballot: BallotCreateOneWithoutVotesInput;
  canton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  schooltype?: Maybe<Scalars['String']>;
  team?: Maybe<TeamCreateOneWithoutVoteInput>;
  verify?: Maybe<Scalars['String']>;
  vote: Scalars['Int'];
  year?: Maybe<Scalars['Int']>;
};

export type VoteCreateWithoutTeamInput = {
  ballot: BallotCreateOneWithoutVotesInput;
  canton?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolCreateOneWithoutVoteInput>;
  schooltype?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['String']>;
  vote: Scalars['Int'];
  year?: Maybe<Scalars['Int']>;
};

export type VotedCreateManyWithoutBallotInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutBallotInput>>;
};

export type VotedCreateManyWithoutSchoolInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutSchoolInput>>;
};

export type VotedCreateManyWithoutTeamInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutTeamInput>>;
};

export type VotedCreateManyWithoutUserInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutUserInput>>;
};

export type VotedCreateWithoutBallotInput = {
  id?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolCreateOneWithoutVotedInput>;
  signature?: Maybe<Scalars['String']>;
  team?: Maybe<TeamCreateOneWithoutVotedInput>;
  user: UserCreateOneWithoutVotedInput;
};

export type VotedCreateWithoutSchoolInput = {
  ballot: BallotCreateOneWithoutVotedInput;
  id?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  team?: Maybe<TeamCreateOneWithoutVotedInput>;
  user: UserCreateOneWithoutVotedInput;
};

export type VotedCreateWithoutTeamInput = {
  ballot: BallotCreateOneWithoutVotedInput;
  id?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolCreateOneWithoutVotedInput>;
  signature?: Maybe<Scalars['String']>;
  user: UserCreateOneWithoutVotedInput;
};

export type VotedCreateWithoutUserInput = {
  ballot: BallotCreateOneWithoutVotedInput;
  id?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolCreateOneWithoutVotedInput>;
  signature?: Maybe<Scalars['String']>;
  team?: Maybe<TeamCreateOneWithoutVotedInput>;
};

export type VotedListRelationFilter = {
  every?: Maybe<VotedWhereInput>;
  none?: Maybe<VotedWhereInput>;
  some?: Maybe<VotedWhereInput>;
};

export type VotedScalarWhereInput = {
  AND?: Maybe<Array<VotedScalarWhereInput>>;
  ballotId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<VotedScalarWhereInput>>;
  OR?: Maybe<Array<VotedScalarWhereInput>>;
  schoolId?: Maybe<StringNullableFilter>;
  signature?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  userId?: Maybe<StringFilter>;
};

export type VotedUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  signature?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type VotedUpdateManyWithoutBallotInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutBallotInput>>;
  delete?: Maybe<Array<VotedWhereUniqueInput>>;
  deleteMany?: Maybe<Array<VotedScalarWhereInput>>;
  disconnect?: Maybe<Array<VotedWhereUniqueInput>>;
  set?: Maybe<Array<VotedWhereUniqueInput>>;
  update?: Maybe<Array<VotedUpdateWithWhereUniqueWithoutBallotInput>>;
  updateMany?: Maybe<Array<VotedUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<VotedUpsertWithWhereUniqueWithoutBallotInput>>;
};

export type VotedUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutSchoolInput>>;
  delete?: Maybe<Array<VotedWhereUniqueInput>>;
  deleteMany?: Maybe<Array<VotedScalarWhereInput>>;
  disconnect?: Maybe<Array<VotedWhereUniqueInput>>;
  set?: Maybe<Array<VotedWhereUniqueInput>>;
  update?: Maybe<Array<VotedUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: Maybe<Array<VotedUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<VotedUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type VotedUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutTeamInput>>;
  delete?: Maybe<Array<VotedWhereUniqueInput>>;
  deleteMany?: Maybe<Array<VotedScalarWhereInput>>;
  disconnect?: Maybe<Array<VotedWhereUniqueInput>>;
  set?: Maybe<Array<VotedWhereUniqueInput>>;
  update?: Maybe<Array<VotedUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<VotedUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<VotedUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type VotedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<VotedWhereUniqueInput>>;
  create?: Maybe<Array<VotedCreateWithoutUserInput>>;
  delete?: Maybe<Array<VotedWhereUniqueInput>>;
  deleteMany?: Maybe<Array<VotedScalarWhereInput>>;
  disconnect?: Maybe<Array<VotedWhereUniqueInput>>;
  set?: Maybe<Array<VotedWhereUniqueInput>>;
  update?: Maybe<Array<VotedUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<VotedUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<VotedUpsertWithWhereUniqueWithoutUserInput>>;
};

export type VotedUpdateManyWithWhereNestedInput = {
  data: VotedUpdateManyDataInput;
  where: VotedScalarWhereInput;
};

export type VotedUpdateWithoutBallotDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneWithoutVotedInput>;
  signature?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutVotedInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutVotedInput>;
};

export type VotedUpdateWithoutSchoolDataInput = {
  ballot?: Maybe<BallotUpdateOneRequiredWithoutVotedInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  signature?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutVotedInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutVotedInput>;
};

export type VotedUpdateWithoutTeamDataInput = {
  ballot?: Maybe<BallotUpdateOneRequiredWithoutVotedInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneWithoutVotedInput>;
  signature?: Maybe<NullableStringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutVotedInput>;
};

export type VotedUpdateWithoutUserDataInput = {
  ballot?: Maybe<BallotUpdateOneRequiredWithoutVotedInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneWithoutVotedInput>;
  signature?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutVotedInput>;
};

export type VotedUpdateWithWhereUniqueWithoutBallotInput = {
  data: VotedUpdateWithoutBallotDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedUpdateWithWhereUniqueWithoutSchoolInput = {
  data: VotedUpdateWithoutSchoolDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedUpdateWithWhereUniqueWithoutTeamInput = {
  data: VotedUpdateWithoutTeamDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedUpdateWithWhereUniqueWithoutUserInput = {
  data: VotedUpdateWithoutUserDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedUpsertWithWhereUniqueWithoutBallotInput = {
  create: VotedCreateWithoutBallotInput;
  update: VotedUpdateWithoutBallotDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedUpsertWithWhereUniqueWithoutSchoolInput = {
  create: VotedCreateWithoutSchoolInput;
  update: VotedUpdateWithoutSchoolDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedUpsertWithWhereUniqueWithoutTeamInput = {
  create: VotedCreateWithoutTeamInput;
  update: VotedUpdateWithoutTeamDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedUpsertWithWhereUniqueWithoutUserInput = {
  create: VotedCreateWithoutUserInput;
  update: VotedUpdateWithoutUserDataInput;
  where: VotedWhereUniqueInput;
};

export type VotedWhereInput = {
  AND?: Maybe<Array<VotedWhereInput>>;
  ballot?: Maybe<BallotWhereInput>;
  ballotId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<VotedWhereInput>>;
  OR?: Maybe<Array<VotedWhereInput>>;
  school?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<StringNullableFilter>;
  signature?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type VotedWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type VoteListRelationFilter = {
  every?: Maybe<VoteWhereInput>;
  none?: Maybe<VoteWhereInput>;
  some?: Maybe<VoteWhereInput>;
};

export type VoteScalarWhereInput = {
  AND?: Maybe<Array<VoteScalarWhereInput>>;
  ballotId?: Maybe<StringFilter>;
  canton?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<VoteScalarWhereInput>>;
  OR?: Maybe<Array<VoteScalarWhereInput>>;
  schoolId?: Maybe<StringNullableFilter>;
  schooltype?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  verify?: Maybe<StringNullableFilter>;
  vote?: Maybe<IntFilter>;
  year?: Maybe<IntNullableFilter>;
};

export type VoteUpdateManyDataInput = {
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  schooltype?: Maybe<NullableStringFieldUpdateOperationsInput>;
  verify?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vote?: Maybe<IntFieldUpdateOperationsInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type VoteUpdateManyWithoutBallotInput = {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  create?: Maybe<Array<VoteCreateWithoutBallotInput>>;
  delete?: Maybe<Array<VoteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<VoteScalarWhereInput>>;
  disconnect?: Maybe<Array<VoteWhereUniqueInput>>;
  set?: Maybe<Array<VoteWhereUniqueInput>>;
  update?: Maybe<Array<VoteUpdateWithWhereUniqueWithoutBallotInput>>;
  updateMany?: Maybe<Array<VoteUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<VoteUpsertWithWhereUniqueWithoutBallotInput>>;
};

export type VoteUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  create?: Maybe<Array<VoteCreateWithoutSchoolInput>>;
  delete?: Maybe<Array<VoteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<VoteScalarWhereInput>>;
  disconnect?: Maybe<Array<VoteWhereUniqueInput>>;
  set?: Maybe<Array<VoteWhereUniqueInput>>;
  update?: Maybe<Array<VoteUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: Maybe<Array<VoteUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<VoteUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type VoteUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  create?: Maybe<Array<VoteCreateWithoutTeamInput>>;
  delete?: Maybe<Array<VoteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<VoteScalarWhereInput>>;
  disconnect?: Maybe<Array<VoteWhereUniqueInput>>;
  set?: Maybe<Array<VoteWhereUniqueInput>>;
  update?: Maybe<Array<VoteUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<VoteUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<VoteUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type VoteUpdateManyWithWhereNestedInput = {
  data: VoteUpdateManyDataInput;
  where: VoteScalarWhereInput;
};

export type VoteUpdateWithoutBallotDataInput = {
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneWithoutVoteInput>;
  schooltype?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutVoteInput>;
  verify?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vote?: Maybe<IntFieldUpdateOperationsInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type VoteUpdateWithoutSchoolDataInput = {
  ballot?: Maybe<BallotUpdateOneRequiredWithoutVotesInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  schooltype?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutVoteInput>;
  verify?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vote?: Maybe<IntFieldUpdateOperationsInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type VoteUpdateWithoutTeamDataInput = {
  ballot?: Maybe<BallotUpdateOneRequiredWithoutVotesInput>;
  canton?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneWithoutVoteInput>;
  schooltype?: Maybe<NullableStringFieldUpdateOperationsInput>;
  verify?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vote?: Maybe<IntFieldUpdateOperationsInput>;
  year?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type VoteUpdateWithWhereUniqueWithoutBallotInput = {
  data: VoteUpdateWithoutBallotDataInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpdateWithWhereUniqueWithoutSchoolInput = {
  data: VoteUpdateWithoutSchoolDataInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpdateWithWhereUniqueWithoutTeamInput = {
  data: VoteUpdateWithoutTeamDataInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpsertWithWhereUniqueWithoutBallotInput = {
  create: VoteCreateWithoutBallotInput;
  update: VoteUpdateWithoutBallotDataInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpsertWithWhereUniqueWithoutSchoolInput = {
  create: VoteCreateWithoutSchoolInput;
  update: VoteUpdateWithoutSchoolDataInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpsertWithWhereUniqueWithoutTeamInput = {
  create: VoteCreateWithoutTeamInput;
  update: VoteUpdateWithoutTeamDataInput;
  where: VoteWhereUniqueInput;
};

export type VoteWhereInput = {
  AND?: Maybe<Array<VoteWhereInput>>;
  ballot?: Maybe<BallotWhereInput>;
  ballotId?: Maybe<StringFilter>;
  canton?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<VoteWhereInput>>;
  OR?: Maybe<Array<VoteWhereInput>>;
  school?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<StringNullableFilter>;
  schooltype?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringNullableFilter>;
  verify?: Maybe<StringNullableFilter>;
  vote?: Maybe<IntFilter>;
  year?: Maybe<IntNullableFilter>;
};

export type VoteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BallotFieldsFragment = (
  { __typename?: 'Ballot' }
  & Pick<Ballot, 'id' | 'title' | 'description' | 'body' | 'start' | 'end' | 'scope' | 'canton'>
);

export type BallotRunFieldsFragment = (
  { __typename?: 'BallotRun' }
  & Pick<BallotRun, 'id' | 'start' | 'end'>
  & { ballot: (
    { __typename?: 'Ballot' }
    & BallotFieldsFragment
  ) }
);

export type BallotsQueryVariables = Exact<{
  where?: Maybe<BallotWhereInput>;
}>;


export type BallotsQuery = (
  { __typename?: 'Query' }
  & { ballots: Array<(
    { __typename?: 'Ballot' }
    & BallotFieldsFragment
  )> }
);

export type BallotQueryVariables = Exact<{
  where: BallotWhereUniqueInput;
}>;


export type BallotQuery = (
  { __typename?: 'Query' }
  & { ballot?: Maybe<(
    { __typename?: 'Ballot' }
    & Pick<Ballot, 'canVote' | 'hasVoted'>
    & BallotFieldsFragment
  )> }
);

export type GetBallotRunsQueryVariables = Exact<{
  teamId: Scalars['String'];
}>;


export type GetBallotRunsQuery = (
  { __typename?: 'Query' }
  & { getBallotRuns?: Maybe<Array<(
    { __typename?: 'BallotRun' }
    & BallotRunFieldsFragment
  )>> }
);

export type AddBallotRunMutationVariables = Exact<{
  ballotId: Scalars['String'];
  teamId: Scalars['String'];
}>;


export type AddBallotRunMutation = (
  { __typename?: 'Mutation' }
  & { addBallotRun?: Maybe<(
    { __typename?: 'BallotRun' }
    & BallotRunFieldsFragment
  )> }
);

export type RemoveBallotRunMutationVariables = Exact<{
  ballotRunId: Scalars['String'];
}>;


export type RemoveBallotRunMutation = (
  { __typename?: 'Mutation' }
  & { removeBallotRun?: Maybe<(
    { __typename?: 'Response' }
    & Pick<Response, 'success' | 'error' | 'message'>
  )> }
);

export type StartBallotRunMutationVariables = Exact<{
  ballotRunId: Scalars['String'];
}>;


export type StartBallotRunMutation = (
  { __typename?: 'Mutation' }
  & { startBallotRun?: Maybe<(
    { __typename?: 'BallotRun' }
    & BallotRunFieldsFragment
  )> }
);

export type EndBallotRunMutationVariables = Exact<{
  ballotRunId: Scalars['String'];
}>;


export type EndBallotRunMutation = (
  { __typename?: 'Mutation' }
  & { endBallotRun?: Maybe<(
    { __typename?: 'BallotRun' }
    & BallotRunFieldsFragment
  )> }
);

export type VoteMutationVariables = Exact<{
  ballotId: Scalars['String'];
  vote: Scalars['Int'];
}>;


export type VoteMutation = (
  { __typename?: 'Mutation' }
  & { vote?: Maybe<(
    { __typename?: 'Vote' }
    & Pick<Vote, 'verify'>
    & { ballot: (
      { __typename?: 'Ballot' }
      & Pick<Ballot, 'id' | 'canVote' | 'hasVoted'>
    ) }
  )> }
);

export type VoteCodeMutationVariables = Exact<{
  code: Scalars['String'];
  ballotRunId: Scalars['String'];
  vote: Scalars['Int'];
}>;


export type VoteCodeMutation = (
  { __typename?: 'Mutation' }
  & { voteCode?: Maybe<(
    { __typename?: 'Response' }
    & Pick<Response, 'success' | 'error' | 'message'>
  )> }
);

export type LoginFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'lastname' | 'shortname' | 'role' | 'email'>
  & { school?: Maybe<(
    { __typename?: 'School' }
    & Pick<School, 'id' | 'name' | 'city'>
  )>, team?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
    & { teacher: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'shortname'>
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & LoginFieldsFragment
  )> }
);

export type SchoolsWithMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type SchoolsWithMembersQuery = (
  { __typename?: 'Query' }
  & { schools: Array<(
    { __typename?: 'School' }
    & Pick<School, 'id' | 'name' | 'city' | 'zip' | 'canton'>
    & { members: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'lastname'>
    )> }
  )> }
);

export type SetSchoolMutationVariables = Exact<{
  school: Scalars['String'];
}>;


export type SetSchoolMutation = (
  { __typename?: 'Mutation' }
  & { setSchool?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'shortname' | 'role' | 'email' | 'lastname'>
    & { school?: Maybe<(
      { __typename?: 'School' }
      & Pick<School, 'id' | 'name' | 'city' | 'zip'>
    )> }
  )> }
);

export type SchoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type SchoolsQuery = (
  { __typename?: 'Query' }
  & { schools: Array<(
    { __typename?: 'School' }
    & Pick<School, 'id' | 'name' | 'city' | 'zip' | 'canton'>
  )> }
);

export type CreateOneSchoolMutationVariables = Exact<{
  data: SchoolCreateInput;
}>;


export type CreateOneSchoolMutation = (
  { __typename?: 'Mutation' }
  & { createOneSchool: (
    { __typename?: 'School' }
    & Pick<School, 'id' | 'name' | 'address' | 'zip' | 'city' | 'canton'>
  ) }
);

export type NewSchoolFragment = (
  { __typename?: 'School' }
  & Pick<School, 'name' | 'address' | 'zip' | 'city' | 'canton'>
);

export type TeamAnonFieldsFragment = (
  { __typename?: 'Team' }
  & Pick<Team, 'id' | 'name'>
  & { school: (
    { __typename?: 'School' }
    & Pick<School, 'id' | 'name' | 'city'>
  ) }
);

export type TeamUserFieldsFragment = (
  { __typename?: 'Team' }
  & { members: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'shortname'>
  )> }
  & TeamAnonFieldsFragment
);

export type TeamTeacherFieldsFragment = (
  { __typename?: 'Team' }
  & Pick<Team, 'invite' | 'code'>
  & { members: Array<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'emailVerified'>
  )> }
  & TeamUserFieldsFragment
);

export type TeamsQueryVariables = Exact<{
  where?: Maybe<TeamWhereInput>;
}>;


export type TeamsQuery = (
  { __typename?: 'Query' }
  & { teams: Array<(
    { __typename?: 'Team' }
    & TeamTeacherFieldsFragment
  )> }
);

export type TeamUserQueryVariables = Exact<{
  where: TeamWhereUniqueInput;
}>;


export type TeamUserQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & TeamUserFieldsFragment
  )> }
);

export type TeamTeacherQueryVariables = Exact<{
  where: TeamWhereUniqueInput;
}>;


export type TeamTeacherQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & TeamTeacherFieldsFragment
  )> }
);

export type TeamByInviteQueryVariables = Exact<{
  invite: Scalars['String'];
}>;


export type TeamByInviteQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & TeamUserFieldsFragment
  )> }
);

export type TeamByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type TeamByCodeQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & TeamAnonFieldsFragment
  )> }
);

export type CreateOneTeamMutationVariables = Exact<{
  name: Scalars['String'];
  school: Scalars['String'];
  teacher: Scalars['String'];
}>;


export type CreateOneTeamMutation = (
  { __typename?: 'Mutation' }
  & { createOneTeam: (
    { __typename?: 'Team' }
    & TeamTeacherFieldsFragment
  ) }
);

export type UsersQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
}>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'shortname'>
    & { team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name'>
      & { school: (
        { __typename?: 'School' }
        & Pick<School, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type CreateInvitedUserMutationVariables = Exact<{
  invite: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
}>;


export type CreateInvitedUserMutation = (
  { __typename?: 'Mutation' }
  & { createInvitedUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'lastname' | 'shortname' | 'role'>
  )> }
);

export type AcceptInviteMutationVariables = Exact<{
  invite: Scalars['String'];
}>;


export type AcceptInviteMutation = (
  { __typename?: 'Mutation' }
  & { acceptInvite?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
    & { school: (
      { __typename?: 'School' }
      & Pick<School, 'id' | 'name' | 'city'>
    ) }
  )> }
);

export type InviteStudentsMutationVariables = Exact<{
  team: Scalars['String'];
  emails: Array<Scalars['String']>;
}>;


export type InviteStudentsMutation = (
  { __typename?: 'Mutation' }
  & { inviteStudents?: Maybe<(
    { __typename?: 'Team' }
    & TeamTeacherFieldsFragment
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'ResponseLogin' }
    & Pick<ResponseLogin, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & LoginFieldsFragment
    )> }
  )> }
);

export type EmailVerificationMutationVariables = Exact<{
  email: Scalars['String'];
  purpose: Scalars['String'];
}>;


export type EmailVerificationMutation = (
  { __typename?: 'Mutation' }
  & { emailVerification?: Maybe<(
    { __typename?: 'ResponseLogin' }
    & Pick<ResponseLogin, 'token'>
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword?: Maybe<(
    { __typename?: 'ResponseLogin' }
    & Pick<ResponseLogin, 'token'>
  )> }
);

export type CheckVerificationMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type CheckVerificationMutation = (
  { __typename?: 'Mutation' }
  & { checkVerification?: Maybe<(
    { __typename?: 'ResponseLogin' }
    & Pick<ResponseLogin, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & LoginFieldsFragment
    )> }
  )> }
);

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'shortname' | 'lastname' | 'role'>
  ) }
);

export const BallotFieldsFragmentDoc = gql`
    fragment BallotFields on Ballot {
  id
  title
  description
  body
  start
  end
  scope
  canton
}
    `;
export const BallotRunFieldsFragmentDoc = gql`
    fragment BallotRunFields on BallotRun {
  id
  start
  end
  ballot {
    ...BallotFields
  }
}
    ${BallotFieldsFragmentDoc}`;
export const LoginFieldsFragmentDoc = gql`
    fragment LoginFields on User {
  id
  name
  lastname
  shortname
  role
  email
  school {
    id
    name
    city
  }
  team {
    id
    name
    teacher {
      id
      name
      shortname
    }
  }
}
    `;
export const NewSchoolFragmentDoc = gql`
    fragment NewSchool on School {
  name
  address
  zip
  city
  canton
}
    `;
export const TeamAnonFieldsFragmentDoc = gql`
    fragment TeamAnonFields on Team {
  id
  name
  school {
    id
    name
    city
  }
}
    `;
export const TeamUserFieldsFragmentDoc = gql`
    fragment TeamUserFields on Team {
  ...TeamAnonFields
  members {
    id
    name
    shortname
  }
}
    ${TeamAnonFieldsFragmentDoc}`;
export const TeamTeacherFieldsFragmentDoc = gql`
    fragment TeamTeacherFields on Team {
  ...TeamUserFields
  invite
  code
  members {
    email
    emailVerified
  }
}
    ${TeamUserFieldsFragmentDoc}`;
export const BallotsDocument = gql`
    query ballots($where: BallotWhereInput) {
  ballots(where: $where) {
    ...BallotFields
  }
}
    ${BallotFieldsFragmentDoc}`;

/**
 * __useBallotsQuery__
 *
 * To run a query within a React component, call `useBallotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBallotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBallotsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBallotsQuery(baseOptions?: Apollo.QueryHookOptions<BallotsQuery, BallotsQueryVariables>) {
        return Apollo.useQuery<BallotsQuery, BallotsQueryVariables>(BallotsDocument, baseOptions);
      }
export function useBallotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BallotsQuery, BallotsQueryVariables>) {
          return Apollo.useLazyQuery<BallotsQuery, BallotsQueryVariables>(BallotsDocument, baseOptions);
        }
export type BallotsQueryHookResult = ReturnType<typeof useBallotsQuery>;
export type BallotsLazyQueryHookResult = ReturnType<typeof useBallotsLazyQuery>;
export type BallotsQueryResult = Apollo.QueryResult<BallotsQuery, BallotsQueryVariables>;
export const BallotDocument = gql`
    query ballot($where: BallotWhereUniqueInput!) {
  ballot(where: $where) {
    ...BallotFields
    canVote
    hasVoted
  }
}
    ${BallotFieldsFragmentDoc}`;

/**
 * __useBallotQuery__
 *
 * To run a query within a React component, call `useBallotQuery` and pass it any options that fit your needs.
 * When your component renders, `useBallotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBallotQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBallotQuery(baseOptions?: Apollo.QueryHookOptions<BallotQuery, BallotQueryVariables>) {
        return Apollo.useQuery<BallotQuery, BallotQueryVariables>(BallotDocument, baseOptions);
      }
export function useBallotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BallotQuery, BallotQueryVariables>) {
          return Apollo.useLazyQuery<BallotQuery, BallotQueryVariables>(BallotDocument, baseOptions);
        }
export type BallotQueryHookResult = ReturnType<typeof useBallotQuery>;
export type BallotLazyQueryHookResult = ReturnType<typeof useBallotLazyQuery>;
export type BallotQueryResult = Apollo.QueryResult<BallotQuery, BallotQueryVariables>;
export const GetBallotRunsDocument = gql`
    query getBallotRuns($teamId: String!) {
  getBallotRuns(teamId: $teamId) {
    ...BallotRunFields
  }
}
    ${BallotRunFieldsFragmentDoc}`;

/**
 * __useGetBallotRunsQuery__
 *
 * To run a query within a React component, call `useGetBallotRunsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBallotRunsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBallotRunsQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useGetBallotRunsQuery(baseOptions?: Apollo.QueryHookOptions<GetBallotRunsQuery, GetBallotRunsQueryVariables>) {
        return Apollo.useQuery<GetBallotRunsQuery, GetBallotRunsQueryVariables>(GetBallotRunsDocument, baseOptions);
      }
export function useGetBallotRunsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBallotRunsQuery, GetBallotRunsQueryVariables>) {
          return Apollo.useLazyQuery<GetBallotRunsQuery, GetBallotRunsQueryVariables>(GetBallotRunsDocument, baseOptions);
        }
export type GetBallotRunsQueryHookResult = ReturnType<typeof useGetBallotRunsQuery>;
export type GetBallotRunsLazyQueryHookResult = ReturnType<typeof useGetBallotRunsLazyQuery>;
export type GetBallotRunsQueryResult = Apollo.QueryResult<GetBallotRunsQuery, GetBallotRunsQueryVariables>;
export const AddBallotRunDocument = gql`
    mutation addBallotRun($ballotId: String!, $teamId: String!) {
  addBallotRun(ballotId: $ballotId, teamId: $teamId) {
    ...BallotRunFields
  }
}
    ${BallotRunFieldsFragmentDoc}`;
export type AddBallotRunMutationFn = Apollo.MutationFunction<AddBallotRunMutation, AddBallotRunMutationVariables>;

/**
 * __useAddBallotRunMutation__
 *
 * To run a mutation, you first call `useAddBallotRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBallotRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBallotRunMutation, { data, loading, error }] = useAddBallotRunMutation({
 *   variables: {
 *      ballotId: // value for 'ballotId'
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useAddBallotRunMutation(baseOptions?: Apollo.MutationHookOptions<AddBallotRunMutation, AddBallotRunMutationVariables>) {
        return Apollo.useMutation<AddBallotRunMutation, AddBallotRunMutationVariables>(AddBallotRunDocument, baseOptions);
      }
export type AddBallotRunMutationHookResult = ReturnType<typeof useAddBallotRunMutation>;
export type AddBallotRunMutationResult = Apollo.MutationResult<AddBallotRunMutation>;
export type AddBallotRunMutationOptions = Apollo.BaseMutationOptions<AddBallotRunMutation, AddBallotRunMutationVariables>;
export const RemoveBallotRunDocument = gql`
    mutation removeBallotRun($ballotRunId: String!) {
  removeBallotRun(ballotRunId: $ballotRunId) {
    success
    error
    message
  }
}
    `;
export type RemoveBallotRunMutationFn = Apollo.MutationFunction<RemoveBallotRunMutation, RemoveBallotRunMutationVariables>;

/**
 * __useRemoveBallotRunMutation__
 *
 * To run a mutation, you first call `useRemoveBallotRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBallotRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBallotRunMutation, { data, loading, error }] = useRemoveBallotRunMutation({
 *   variables: {
 *      ballotRunId: // value for 'ballotRunId'
 *   },
 * });
 */
export function useRemoveBallotRunMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBallotRunMutation, RemoveBallotRunMutationVariables>) {
        return Apollo.useMutation<RemoveBallotRunMutation, RemoveBallotRunMutationVariables>(RemoveBallotRunDocument, baseOptions);
      }
export type RemoveBallotRunMutationHookResult = ReturnType<typeof useRemoveBallotRunMutation>;
export type RemoveBallotRunMutationResult = Apollo.MutationResult<RemoveBallotRunMutation>;
export type RemoveBallotRunMutationOptions = Apollo.BaseMutationOptions<RemoveBallotRunMutation, RemoveBallotRunMutationVariables>;
export const StartBallotRunDocument = gql`
    mutation startBallotRun($ballotRunId: String!) {
  startBallotRun(ballotRunId: $ballotRunId) {
    ...BallotRunFields
  }
}
    ${BallotRunFieldsFragmentDoc}`;
export type StartBallotRunMutationFn = Apollo.MutationFunction<StartBallotRunMutation, StartBallotRunMutationVariables>;

/**
 * __useStartBallotRunMutation__
 *
 * To run a mutation, you first call `useStartBallotRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartBallotRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startBallotRunMutation, { data, loading, error }] = useStartBallotRunMutation({
 *   variables: {
 *      ballotRunId: // value for 'ballotRunId'
 *   },
 * });
 */
export function useStartBallotRunMutation(baseOptions?: Apollo.MutationHookOptions<StartBallotRunMutation, StartBallotRunMutationVariables>) {
        return Apollo.useMutation<StartBallotRunMutation, StartBallotRunMutationVariables>(StartBallotRunDocument, baseOptions);
      }
export type StartBallotRunMutationHookResult = ReturnType<typeof useStartBallotRunMutation>;
export type StartBallotRunMutationResult = Apollo.MutationResult<StartBallotRunMutation>;
export type StartBallotRunMutationOptions = Apollo.BaseMutationOptions<StartBallotRunMutation, StartBallotRunMutationVariables>;
export const EndBallotRunDocument = gql`
    mutation endBallotRun($ballotRunId: String!) {
  endBallotRun(ballotRunId: $ballotRunId) {
    ...BallotRunFields
  }
}
    ${BallotRunFieldsFragmentDoc}`;
export type EndBallotRunMutationFn = Apollo.MutationFunction<EndBallotRunMutation, EndBallotRunMutationVariables>;

/**
 * __useEndBallotRunMutation__
 *
 * To run a mutation, you first call `useEndBallotRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndBallotRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endBallotRunMutation, { data, loading, error }] = useEndBallotRunMutation({
 *   variables: {
 *      ballotRunId: // value for 'ballotRunId'
 *   },
 * });
 */
export function useEndBallotRunMutation(baseOptions?: Apollo.MutationHookOptions<EndBallotRunMutation, EndBallotRunMutationVariables>) {
        return Apollo.useMutation<EndBallotRunMutation, EndBallotRunMutationVariables>(EndBallotRunDocument, baseOptions);
      }
export type EndBallotRunMutationHookResult = ReturnType<typeof useEndBallotRunMutation>;
export type EndBallotRunMutationResult = Apollo.MutationResult<EndBallotRunMutation>;
export type EndBallotRunMutationOptions = Apollo.BaseMutationOptions<EndBallotRunMutation, EndBallotRunMutationVariables>;
export const VoteDocument = gql`
    mutation vote($ballotId: String!, $vote: Int!) {
  vote(ballotId: $ballotId, vote: $vote) {
    verify
    ballot {
      id
      canVote
      hasVoted
    }
  }
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      ballotId: // value for 'ballotId'
 *      vote: // value for 'vote'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, baseOptions);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const VoteCodeDocument = gql`
    mutation voteCode($code: String!, $ballotRunId: String!, $vote: Int!) {
  voteCode(code: $code, ballotRunId: $ballotRunId, vote: $vote) {
    success
    error
    message
  }
}
    `;
export type VoteCodeMutationFn = Apollo.MutationFunction<VoteCodeMutation, VoteCodeMutationVariables>;

/**
 * __useVoteCodeMutation__
 *
 * To run a mutation, you first call `useVoteCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteCodeMutation, { data, loading, error }] = useVoteCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *      ballotRunId: // value for 'ballotRunId'
 *      vote: // value for 'vote'
 *   },
 * });
 */
export function useVoteCodeMutation(baseOptions?: Apollo.MutationHookOptions<VoteCodeMutation, VoteCodeMutationVariables>) {
        return Apollo.useMutation<VoteCodeMutation, VoteCodeMutationVariables>(VoteCodeDocument, baseOptions);
      }
export type VoteCodeMutationHookResult = ReturnType<typeof useVoteCodeMutation>;
export type VoteCodeMutationResult = Apollo.MutationResult<VoteCodeMutation>;
export type VoteCodeMutationOptions = Apollo.BaseMutationOptions<VoteCodeMutation, VoteCodeMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...LoginFields
  }
}
    ${LoginFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SchoolsWithMembersDocument = gql`
    query schoolsWithMembers {
  schools {
    id
    name
    city
    zip
    canton
    members {
      id
      name
      lastname
    }
  }
}
    `;

/**
 * __useSchoolsWithMembersQuery__
 *
 * To run a query within a React component, call `useSchoolsWithMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSchoolsWithMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSchoolsWithMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSchoolsWithMembersQuery(baseOptions?: Apollo.QueryHookOptions<SchoolsWithMembersQuery, SchoolsWithMembersQueryVariables>) {
        return Apollo.useQuery<SchoolsWithMembersQuery, SchoolsWithMembersQueryVariables>(SchoolsWithMembersDocument, baseOptions);
      }
export function useSchoolsWithMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SchoolsWithMembersQuery, SchoolsWithMembersQueryVariables>) {
          return Apollo.useLazyQuery<SchoolsWithMembersQuery, SchoolsWithMembersQueryVariables>(SchoolsWithMembersDocument, baseOptions);
        }
export type SchoolsWithMembersQueryHookResult = ReturnType<typeof useSchoolsWithMembersQuery>;
export type SchoolsWithMembersLazyQueryHookResult = ReturnType<typeof useSchoolsWithMembersLazyQuery>;
export type SchoolsWithMembersQueryResult = Apollo.QueryResult<SchoolsWithMembersQuery, SchoolsWithMembersQueryVariables>;
export const SetSchoolDocument = gql`
    mutation setSchool($school: String!) {
  setSchool(school: $school) {
    id
    name
    shortname
    role
    email
    lastname
    school {
      id
      name
      city
      zip
    }
  }
}
    `;
export type SetSchoolMutationFn = Apollo.MutationFunction<SetSchoolMutation, SetSchoolMutationVariables>;

/**
 * __useSetSchoolMutation__
 *
 * To run a mutation, you first call `useSetSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setSchoolMutation, { data, loading, error }] = useSetSchoolMutation({
 *   variables: {
 *      school: // value for 'school'
 *   },
 * });
 */
export function useSetSchoolMutation(baseOptions?: Apollo.MutationHookOptions<SetSchoolMutation, SetSchoolMutationVariables>) {
        return Apollo.useMutation<SetSchoolMutation, SetSchoolMutationVariables>(SetSchoolDocument, baseOptions);
      }
export type SetSchoolMutationHookResult = ReturnType<typeof useSetSchoolMutation>;
export type SetSchoolMutationResult = Apollo.MutationResult<SetSchoolMutation>;
export type SetSchoolMutationOptions = Apollo.BaseMutationOptions<SetSchoolMutation, SetSchoolMutationVariables>;
export const SchoolsDocument = gql`
    query schools {
  schools {
    id
    name
    city
    zip
    canton
  }
}
    `;

/**
 * __useSchoolsQuery__
 *
 * To run a query within a React component, call `useSchoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSchoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSchoolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSchoolsQuery(baseOptions?: Apollo.QueryHookOptions<SchoolsQuery, SchoolsQueryVariables>) {
        return Apollo.useQuery<SchoolsQuery, SchoolsQueryVariables>(SchoolsDocument, baseOptions);
      }
export function useSchoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SchoolsQuery, SchoolsQueryVariables>) {
          return Apollo.useLazyQuery<SchoolsQuery, SchoolsQueryVariables>(SchoolsDocument, baseOptions);
        }
export type SchoolsQueryHookResult = ReturnType<typeof useSchoolsQuery>;
export type SchoolsLazyQueryHookResult = ReturnType<typeof useSchoolsLazyQuery>;
export type SchoolsQueryResult = Apollo.QueryResult<SchoolsQuery, SchoolsQueryVariables>;
export const CreateOneSchoolDocument = gql`
    mutation createOneSchool($data: SchoolCreateInput!) {
  createOneSchool(data: $data) {
    id
    name
    address
    zip
    city
    canton
  }
}
    `;
export type CreateOneSchoolMutationFn = Apollo.MutationFunction<CreateOneSchoolMutation, CreateOneSchoolMutationVariables>;

/**
 * __useCreateOneSchoolMutation__
 *
 * To run a mutation, you first call `useCreateOneSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneSchoolMutation, { data, loading, error }] = useCreateOneSchoolMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneSchoolMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneSchoolMutation, CreateOneSchoolMutationVariables>) {
        return Apollo.useMutation<CreateOneSchoolMutation, CreateOneSchoolMutationVariables>(CreateOneSchoolDocument, baseOptions);
      }
export type CreateOneSchoolMutationHookResult = ReturnType<typeof useCreateOneSchoolMutation>;
export type CreateOneSchoolMutationResult = Apollo.MutationResult<CreateOneSchoolMutation>;
export type CreateOneSchoolMutationOptions = Apollo.BaseMutationOptions<CreateOneSchoolMutation, CreateOneSchoolMutationVariables>;
export const TeamsDocument = gql`
    query teams($where: TeamWhereInput) {
  teams(where: $where) {
    ...TeamTeacherFields
  }
}
    ${TeamTeacherFieldsFragmentDoc}`;

/**
 * __useTeamsQuery__
 *
 * To run a query within a React component, call `useTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTeamsQuery(baseOptions?: Apollo.QueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
        return Apollo.useQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, baseOptions);
      }
export function useTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
          return Apollo.useLazyQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, baseOptions);
        }
export type TeamsQueryHookResult = ReturnType<typeof useTeamsQuery>;
export type TeamsLazyQueryHookResult = ReturnType<typeof useTeamsLazyQuery>;
export type TeamsQueryResult = Apollo.QueryResult<TeamsQuery, TeamsQueryVariables>;
export const TeamUserDocument = gql`
    query teamUser($where: TeamWhereUniqueInput!) {
  team(where: $where) {
    ...TeamUserFields
  }
}
    ${TeamUserFieldsFragmentDoc}`;

/**
 * __useTeamUserQuery__
 *
 * To run a query within a React component, call `useTeamUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTeamUserQuery(baseOptions?: Apollo.QueryHookOptions<TeamUserQuery, TeamUserQueryVariables>) {
        return Apollo.useQuery<TeamUserQuery, TeamUserQueryVariables>(TeamUserDocument, baseOptions);
      }
export function useTeamUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamUserQuery, TeamUserQueryVariables>) {
          return Apollo.useLazyQuery<TeamUserQuery, TeamUserQueryVariables>(TeamUserDocument, baseOptions);
        }
export type TeamUserQueryHookResult = ReturnType<typeof useTeamUserQuery>;
export type TeamUserLazyQueryHookResult = ReturnType<typeof useTeamUserLazyQuery>;
export type TeamUserQueryResult = Apollo.QueryResult<TeamUserQuery, TeamUserQueryVariables>;
export const TeamTeacherDocument = gql`
    query teamTeacher($where: TeamWhereUniqueInput!) {
  team(where: $where) {
    ...TeamTeacherFields
  }
}
    ${TeamTeacherFieldsFragmentDoc}`;

/**
 * __useTeamTeacherQuery__
 *
 * To run a query within a React component, call `useTeamTeacherQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamTeacherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamTeacherQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTeamTeacherQuery(baseOptions?: Apollo.QueryHookOptions<TeamTeacherQuery, TeamTeacherQueryVariables>) {
        return Apollo.useQuery<TeamTeacherQuery, TeamTeacherQueryVariables>(TeamTeacherDocument, baseOptions);
      }
export function useTeamTeacherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamTeacherQuery, TeamTeacherQueryVariables>) {
          return Apollo.useLazyQuery<TeamTeacherQuery, TeamTeacherQueryVariables>(TeamTeacherDocument, baseOptions);
        }
export type TeamTeacherQueryHookResult = ReturnType<typeof useTeamTeacherQuery>;
export type TeamTeacherLazyQueryHookResult = ReturnType<typeof useTeamTeacherLazyQuery>;
export type TeamTeacherQueryResult = Apollo.QueryResult<TeamTeacherQuery, TeamTeacherQueryVariables>;
export const TeamByInviteDocument = gql`
    query teamByInvite($invite: String!) {
  team(where: {invite: $invite}) {
    ...TeamUserFields
  }
}
    ${TeamUserFieldsFragmentDoc}`;

/**
 * __useTeamByInviteQuery__
 *
 * To run a query within a React component, call `useTeamByInviteQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamByInviteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamByInviteQuery({
 *   variables: {
 *      invite: // value for 'invite'
 *   },
 * });
 */
export function useTeamByInviteQuery(baseOptions?: Apollo.QueryHookOptions<TeamByInviteQuery, TeamByInviteQueryVariables>) {
        return Apollo.useQuery<TeamByInviteQuery, TeamByInviteQueryVariables>(TeamByInviteDocument, baseOptions);
      }
export function useTeamByInviteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamByInviteQuery, TeamByInviteQueryVariables>) {
          return Apollo.useLazyQuery<TeamByInviteQuery, TeamByInviteQueryVariables>(TeamByInviteDocument, baseOptions);
        }
export type TeamByInviteQueryHookResult = ReturnType<typeof useTeamByInviteQuery>;
export type TeamByInviteLazyQueryHookResult = ReturnType<typeof useTeamByInviteLazyQuery>;
export type TeamByInviteQueryResult = Apollo.QueryResult<TeamByInviteQuery, TeamByInviteQueryVariables>;
export const TeamByCodeDocument = gql`
    query teamByCode($code: String!) {
  team(where: {code: $code}) {
    ...TeamAnonFields
  }
}
    ${TeamAnonFieldsFragmentDoc}`;

/**
 * __useTeamByCodeQuery__
 *
 * To run a query within a React component, call `useTeamByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useTeamByCodeQuery(baseOptions?: Apollo.QueryHookOptions<TeamByCodeQuery, TeamByCodeQueryVariables>) {
        return Apollo.useQuery<TeamByCodeQuery, TeamByCodeQueryVariables>(TeamByCodeDocument, baseOptions);
      }
export function useTeamByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamByCodeQuery, TeamByCodeQueryVariables>) {
          return Apollo.useLazyQuery<TeamByCodeQuery, TeamByCodeQueryVariables>(TeamByCodeDocument, baseOptions);
        }
export type TeamByCodeQueryHookResult = ReturnType<typeof useTeamByCodeQuery>;
export type TeamByCodeLazyQueryHookResult = ReturnType<typeof useTeamByCodeLazyQuery>;
export type TeamByCodeQueryResult = Apollo.QueryResult<TeamByCodeQuery, TeamByCodeQueryVariables>;
export const CreateOneTeamDocument = gql`
    mutation createOneTeam($name: String!, $school: String!, $teacher: String!) {
  createOneTeam(data: {name: $name, school: {connect: {id: $school}}, teacher: {connect: {id: $teacher}}}) {
    ...TeamTeacherFields
  }
}
    ${TeamTeacherFieldsFragmentDoc}`;
export type CreateOneTeamMutationFn = Apollo.MutationFunction<CreateOneTeamMutation, CreateOneTeamMutationVariables>;

/**
 * __useCreateOneTeamMutation__
 *
 * To run a mutation, you first call `useCreateOneTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTeamMutation, { data, loading, error }] = useCreateOneTeamMutation({
 *   variables: {
 *      name: // value for 'name'
 *      school: // value for 'school'
 *      teacher: // value for 'teacher'
 *   },
 * });
 */
export function useCreateOneTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTeamMutation, CreateOneTeamMutationVariables>) {
        return Apollo.useMutation<CreateOneTeamMutation, CreateOneTeamMutationVariables>(CreateOneTeamDocument, baseOptions);
      }
export type CreateOneTeamMutationHookResult = ReturnType<typeof useCreateOneTeamMutation>;
export type CreateOneTeamMutationResult = Apollo.MutationResult<CreateOneTeamMutation>;
export type CreateOneTeamMutationOptions = Apollo.BaseMutationOptions<CreateOneTeamMutation, CreateOneTeamMutationVariables>;
export const UsersDocument = gql`
    query users($where: UserWhereInput) {
  users(where: $where) {
    id
    shortname
    team {
      id
      name
      school {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CreateInvitedUserDocument = gql`
    mutation createInvitedUser($invite: String!, $name: String, $lastname: String, $email: String!, $password: String) {
  createInvitedUser(invite: $invite, name: $name, lastname: $lastname, email: $email, password: $password) {
    id
    name
    email
    lastname
    shortname
    role
    email
  }
}
    `;
export type CreateInvitedUserMutationFn = Apollo.MutationFunction<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>;

/**
 * __useCreateInvitedUserMutation__
 *
 * To run a mutation, you first call `useCreateInvitedUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvitedUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvitedUserMutation, { data, loading, error }] = useCreateInvitedUserMutation({
 *   variables: {
 *      invite: // value for 'invite'
 *      name: // value for 'name'
 *      lastname: // value for 'lastname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateInvitedUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>) {
        return Apollo.useMutation<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>(CreateInvitedUserDocument, baseOptions);
      }
export type CreateInvitedUserMutationHookResult = ReturnType<typeof useCreateInvitedUserMutation>;
export type CreateInvitedUserMutationResult = Apollo.MutationResult<CreateInvitedUserMutation>;
export type CreateInvitedUserMutationOptions = Apollo.BaseMutationOptions<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>;
export const AcceptInviteDocument = gql`
    mutation acceptInvite($invite: String!) {
  acceptInvite(invite: $invite) {
    id
    name
    school {
      id
      name
      city
    }
  }
}
    `;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      invite: // value for 'invite'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, baseOptions);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
export const InviteStudentsDocument = gql`
    mutation inviteStudents($team: String!, $emails: [String!]!) {
  inviteStudents(team: $team, emails: $emails) {
    ...TeamTeacherFields
  }
}
    ${TeamTeacherFieldsFragmentDoc}`;
export type InviteStudentsMutationFn = Apollo.MutationFunction<InviteStudentsMutation, InviteStudentsMutationVariables>;

/**
 * __useInviteStudentsMutation__
 *
 * To run a mutation, you first call `useInviteStudentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteStudentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteStudentsMutation, { data, loading, error }] = useInviteStudentsMutation({
 *   variables: {
 *      team: // value for 'team'
 *      emails: // value for 'emails'
 *   },
 * });
 */
export function useInviteStudentsMutation(baseOptions?: Apollo.MutationHookOptions<InviteStudentsMutation, InviteStudentsMutationVariables>) {
        return Apollo.useMutation<InviteStudentsMutation, InviteStudentsMutationVariables>(InviteStudentsDocument, baseOptions);
      }
export type InviteStudentsMutationHookResult = ReturnType<typeof useInviteStudentsMutation>;
export type InviteStudentsMutationResult = Apollo.MutationResult<InviteStudentsMutation>;
export type InviteStudentsMutationOptions = Apollo.BaseMutationOptions<InviteStudentsMutation, InviteStudentsMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      ...LoginFields
    }
  }
}
    ${LoginFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const EmailVerificationDocument = gql`
    mutation emailVerification($email: String!, $purpose: String!) {
  emailVerification(email: $email, purpose: $purpose) {
    token
  }
}
    `;
export type EmailVerificationMutationFn = Apollo.MutationFunction<EmailVerificationMutation, EmailVerificationMutationVariables>;

/**
 * __useEmailVerificationMutation__
 *
 * To run a mutation, you first call `useEmailVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmailVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emailVerificationMutation, { data, loading, error }] = useEmailVerificationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      purpose: // value for 'purpose'
 *   },
 * });
 */
export function useEmailVerificationMutation(baseOptions?: Apollo.MutationHookOptions<EmailVerificationMutation, EmailVerificationMutationVariables>) {
        return Apollo.useMutation<EmailVerificationMutation, EmailVerificationMutationVariables>(EmailVerificationDocument, baseOptions);
      }
export type EmailVerificationMutationHookResult = ReturnType<typeof useEmailVerificationMutation>;
export type EmailVerificationMutationResult = Apollo.MutationResult<EmailVerificationMutation>;
export type EmailVerificationMutationOptions = Apollo.BaseMutationOptions<EmailVerificationMutation, EmailVerificationMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($password: String!) {
  changePassword(password: $password) {
    token
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CheckVerificationDocument = gql`
    mutation checkVerification($token: String!) {
  checkVerification(token: $token) {
    token
    user {
      ...LoginFields
    }
  }
}
    ${LoginFieldsFragmentDoc}`;
export type CheckVerificationMutationFn = Apollo.MutationFunction<CheckVerificationMutation, CheckVerificationMutationVariables>;

/**
 * __useCheckVerificationMutation__
 *
 * To run a mutation, you first call `useCheckVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkVerificationMutation, { data, loading, error }] = useCheckVerificationMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCheckVerificationMutation(baseOptions?: Apollo.MutationHookOptions<CheckVerificationMutation, CheckVerificationMutationVariables>) {
        return Apollo.useMutation<CheckVerificationMutation, CheckVerificationMutationVariables>(CheckVerificationDocument, baseOptions);
      }
export type CheckVerificationMutationHookResult = ReturnType<typeof useCheckVerificationMutation>;
export type CheckVerificationMutationResult = Apollo.MutationResult<CheckVerificationMutation>;
export type CheckVerificationMutationOptions = Apollo.BaseMutationOptions<CheckVerificationMutation, CheckVerificationMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    name
    email
    shortname
    lastname
    role
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;