import React from "react";
import PageHeader from "./PageHeader";
import BlogPostsList from "./BlogPostsList";
import PageFooter from "./PageFooter";

const App = () => {
  return (
    <div className="app">
      <PageHeader />
      <BlogPostsList />
      <PageFooter />
    </div>
  );
};

export default App;
