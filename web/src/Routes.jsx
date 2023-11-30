// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import UnAuthenticatedLayout from './layouts/UnAuthenticatedLayout/UnAuthenticatedLayout'
import AuthenticatedLayout from './layouts/AuthenticatedLayout/AuthenticatedLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={UnAuthenticatedLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Private unauthenticated="login">
        <Set wrap={AuthenticatedLayout}>
          <Set wrap={ScaffoldLayout} title="ImageEntryRules" titleTo="imageEntryRules" buttonLabel="New ImageEntryRule" buttonTo="newImageEntryRule">
            <Route path="/image-entry-rules/new" page={ImageEntryRuleNewImageEntryRulePage} name="newImageEntryRule" />
            <Route path="/image-entry-rules/{id:Int}/edit" page={ImageEntryRuleEditImageEntryRulePage} name="editImageEntryRule" />
            <Route path="/image-entry-rules/{id:Int}" page={ImageEntryRuleImageEntryRulePage} name="imageEntryRule" />
            <Route path="/image-entry-rules" page={ImageEntryRuleImageEntryRulesPage} name="imageEntryRules" />
          </Set>
          <Set wrap={ScaffoldLayout} title="Journals" titleTo="journals" buttonLabel="New Journal" buttonTo="newJournal">
            <Route path="/journals/new" page={JournalNewJournalPage} name="newJournal" />
            <Route path="/journals/{id:Int}/edit" page={JournalEditJournalPage} name="editJournal" />
            <Route path="/journals/{id:Int}" page={JournalJournalPage} name="journal" />
            <Route path="/journals" page={JournalJournalsPage} name="journals" />
          </Set>
          <Set wrap={ScaffoldLayout} title="Rules" titleTo="rules" buttonLabel="New Rule" buttonTo="newRule">
            <Route path="/rules/new" page={RuleNewRulePage} name="newRule" />
            <Route path="/rules/{id:Int}/edit" page={RuleEditRulePage} name="editRule" />
            <Route path="/rules/{id:Int}" page={RuleRulePage} name="rule" />
            <Route path="/rules" page={RuleRulesPage} name="rules" />
          </Set>
          <Set wrap={ScaffoldLayout} title="Plans" titleTo="plans" buttonLabel="New Plan" buttonTo="newPlan">
            <Route path="/plans/new" page={PlanNewPlanPage} name="newPlan" />
            <Route path="/plans/{id:Int}/edit" page={PlanEditPlanPage} name="editPlan" />
            <Route path="/plans/{id:Int}" page={PlanPlanPage} name="plan" />
            <Route path="/plans" page={PlanPlansPage} name="plans" />
          </Set>
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
