function showContent(content) {
  var contentDiv = document.getElementById("content");
  switch (content) {
    case "home":
      contentDiv.innerHTML =
        "<h2>Home</h2><h3>This is the home page content.</h3><p>Get Updates for Jobs and Internships openings from different companiesWe are Here for you.</p><h2>Job Openings</h2><h2>💻React Developer:</h2><p> <ul><li>Develop user-facing features using React.js</li><li>Build reusable components and front-end libraries for future use</li><li>Translate designs and wireframes into high-quality code</li><li>Optimize components for maximum performance across different devices and browsers</li><li>Collaborate with the design and back-end teams to implement and integrate APIs</li><li>Stay updated with the latest industry trends and best practices in front-end development</li><li>Troubleshoot and debug issues that arise during development and in production</li></ul></p><p>Location: XYZ City</p><p>Salary: $50,000 - $60,000</p>";
      break;
    case "contact":
      contentDiv.innerHTML = `<h2>Contact</h2><h3>E-mail:</h3><p>rishabh12082002@gmail.com</p><br><h3>Phone:</h3><p>6393380719</p><h3>github Profile:</h3><a href="https://github.com/Roman22661">Click Here</a>`;
      break;
    case "information":
      contentDiv.innerHTML =
        "<h2>Information</h2> <h2>Welcome to our Job Finding Website</h2><h2>About Us</h2><p>At our Job Finding Website, we are dedicated to connecting talented individuals with their dream jobs. We understand that finding the right job can be a challenging and time-consuming process, so we strive to make it easier and more efficient for job seekers to discover exciting career opportunities.</p>";
      break;
    case "guide":
      contentDiv.innerHTML =
        "<h2>Guide</h2><h3>This is the guide page content.</h3><p>In the Guide section, we have curated a comprehensive collection of helpful resources and step-by-step tutorials to assist you in navigating through various processes. Whether you're a beginner or an experienced user, our guides offer valuable insights and practical tips to help you achieve your goals with ease. Empower yourself with knowledge and unlock your full potential.</p>";
      break;
    default:
      contentDiv.innerHTML = "";
      break;
  }
}
