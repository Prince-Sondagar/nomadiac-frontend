## ======= READ AND DELETE =====

Thank you for contributing to the Nomadic Insights code repositories.
Review the checklist and do the right thing. 

### About PR reviews

PRs are viewed as follows:

1. Open PRs are considered ready for full review and merge. Please make sure all tests are passing and that test coverage is added to new features as needed.
2. If you are new to the team or you are making significant changes, we highly recommend starting with a draft so we can collaborate and have discussions as work is being done. It's not required but certainly recommended.

Make small PRS, not large ones. If your PR is getting long, try to break it apart into two.

If you absolutely have to make a big one, make your commits clean.

Don't hesitate to set up a meeting with the code owners if it feels like we're stuck going back 
and forth for too long.

## ==== DELETE THE ABOVE ====

## Related Ticket(s)

1. https://github.com/Nomadic-Insights/panel-frontend/issues/1

## Related PR(s)

1. https://github.com/Nomadic-Insights/panel-frontend/pull/1

## Changes

1. Add X in `src/foo.ts`
2. Standardize Y in `src/bar.ts`
3. ...

## Checklist

- [ ] **PR Name:** Please name this PR in format of
      `[TICKET_ID]: [BRIEF DESCRIPTION]`. For example: _PROJECT-0000: Implement
      component X to use with Y_
- [ ] **Ticket(s) and Related PR(s):** Add the tickets that this PR will resolve
      once merge. You can also add a list of related PR(s); this is useful when trying
      to communicate that another PR must be reviewed first.
- [ ] **Change Description:** Please update the above change list to provide a
      list of changes done. This will be added to the commit when merged for a
      useful commit description.
  - This can be omitted in the rare case that the PR is very small and the title
    alone clearly explains what it does.
- [ ] **Tests:** All code should have strong tests. If you have questions about
      this please ask one of the code owners. 
  - We are currently behind on coverage,
      so please make sure an issue is created to add needed tests so that we can
      at least keep track of tests that we know we need.
- [ ] **Add a Reviewer:** Please add at least one other developer as a
      reviewer. You are welcome to add anyone else you'd like feedback from.
- [ ] **Squash Commit with Details:** It's hard to keep a perfect commit record
      so we prefer squash commits. When doing squash commits the commit name
      should auto fill the the PR name (formatted as defined in the **PR Name**
      section above) plus `(#123)` where the number is the PR number. Set the
      commit paragraph text to be the changes list above (don't include
      "Changes" header, just the list).