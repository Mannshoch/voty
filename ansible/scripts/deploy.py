#!/usr/bin/env python3
#
# commits current changes, waits for github actions and deploys
#
# should be run from project root
# 1. commit unless tsc/eslint failures
# 2. git push
# 3. wait ~10 minutes (later try to use gh cli and poll latest run)
# 4. yarn deploy_dev
#

import os
import sys
import select
import time
import logging


def initLogger():
    # color hack
    logging.addLevelName(
        logging.WARNING, "\033[1;31m%s\033[1;0m" % logging.getLevelName(logging.WARNING))
    logging.addLevelName(
        logging.ERROR, "\033[1;41m%s\033[1;0m" % logging.getLevelName(logging.ERROR))

    log = logging.getLogger()
    log.setLevel(logging.DEBUG)

    ch = logging.StreamHandler()
    formatter = logging.Formatter(
        '%(asctime)s - %(levelname)s\t - %(message)s')
    ch.setFormatter(formatter)
    log.addHandler(ch)
    return log


def exec(cmd):
    global log
    start = time.time()
    print("–"*80)
    log.info("Executing: %s" % cmd)
    result = os.system(cmd)
    if (not result == 0):
        log.error("Error while executing last command: %s" % result)
        sys.exit(result)
    took = round((time.time() - start)/60, 1)
    log.debug("Took %.1f minutes" % took)


def wait(min):
    log.debug("Waiting for %d minutes... " % min)
    print("\t\tabort with: c < enter > to cancel")
    print("\t\t   or with: g < enter > to start deploy")
    print("[c|g] > ")
    i, _, _ = select.select([sys.stdin], [], [], min * 60)
    if (i):
        char = sys.stdin.readline().strip().lower()
        if (char == "c"):
            log.error("Not starting deployment")
            sys.exit(0)
        elif (char == "g"):
            log.error("Starting deployment now")
        else:
            log.error("'%s' is not a valid answer" % char)
            wait(min)


log = initLogger()
commitMessage = " ".join(sys.argv[1:]) or input(
    "Commit message (empty to skip commit): ")

start = time.time()
if commitMessage:
    exec("git add .")
    exec("git commit -m \"%s\"" % commitMessage)

exec("git push")
wait(10)
exec("yarn run deploy_dev")
took = round((time.time() - start)/60, 1)
log.info("✅ Successfully deployed to dev in %.1f minutes" % took)
yesno = input("Would you like to push to production as well? (y/N) ")
if (yesno.lower() == "y"):
    exec("yarn run deploy_prod")
    log.info("🎉 Successfully deployed to prod")
