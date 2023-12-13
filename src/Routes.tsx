import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserAccount = React.lazy(() => import("pages/UserAccount"));
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const TaskAllocatorOne = React.lazy(() => import("pages/TaskAllocatorOne"));
const TaskViews = React.lazy(() => import("pages/TaskViews"));
const SavedCards = React.lazy(() => import("pages/SavedCards"));
const TaskBlocker = React.lazy(() => import("pages/TaskBlocker"));
const TaskAllocator = React.lazy(() => import("pages/TaskAllocator"));
const ReviewApproval = React.lazy(() => import("pages/ReviewApproval"));
const Prioritise = React.lazy(() => import("pages/Prioritise"));
const LeaveTracker = React.lazy(() => import("pages/LeaveTracker"));
const AutomatedPrioritisation = React.lazy(
  () => import("pages/AutomatedPrioritisation"),
);
const TeamBuilder = React.lazy(() => import("pages/TeamBuilder"));
const Tasklist = React.lazy(() => import("pages/Tasklist"));
const Scheduling = React.lazy(() => import("pages/Scheduling"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/tasklist" element={<Tasklist />} />
          <Route path="/teambuilder" element={<TeamBuilder />} />
          <Route
            path="/automatedprioritisation"
            element={<AutomatedPrioritisation />}
          />
          <Route path="/leavetracker" element={<LeaveTracker />} />
          <Route path="/prioritise" element={<Prioritise />} />
          <Route path="/reviewapproval" element={<ReviewApproval />} />
          <Route path="/taskallocator" element={<TaskAllocator />} />
          <Route path="/taskblocker" element={<TaskBlocker />} />
          <Route path="/savedcards" element={<SavedCards />} />
          <Route path="/taskviews" element={<TaskViews />} />
          <Route path="/taskallocatorone" element={<TaskAllocatorOne />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/useraccount" element={<UserAccount />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
