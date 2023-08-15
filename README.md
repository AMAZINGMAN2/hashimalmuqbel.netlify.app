<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HashimPage - About Me</title>
  <link rel="shortcut icon" href="logo.png">
  <link rel="apple-touch-icon" href="logo.png">

  <style>
    /* CSS styles */
    body {
      overflow-y: scroll;
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */
      background: linear-gradient(to bottom right, #251b4d, #101429);
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Arial, sans-serif;
      line-height: 1.6;
      color: #fff;
    }
    body::-webkit-scrollbar {
      width:0;
    }
    .github-link {
      display: flex;
      align-items: center;
    }

    .github-image {
      height: 30px; /* Adjust the height as needed */
      width: auto;
      margin-left: 0px; /* Add some margin to separate the image from the text */
      margin-top: -4px;
    }
    .youtube-image {
      height: 30px; /* Adjust the height as needed */
      width: auto;
      margin-left: 10px; /* Add some margin to separate the image from the text */
      margin-top: -4px;
      margin-bottom: -8px;/* Adjust this value to move the image lower (increase for more space) */
    }


    body::-webkit-scrollbar-track {
      background-color: transparent;
    }

    body::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    /* Hide the scrollbar for Mozilla Firefox */
    body {
      scrollbar-width: none;
    }

    /* If you want to add some padding to the content to avoid the scrollbar overlapping it */
    .content {
      padding-right: 0; /* Adjust the padding as needed */
    }
    .home {
      margin-right: -25px;
      margin-left: 50px;
    }

    .banner {
      background: transparent;
      color: #fff;
      padding: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px 10px 0 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      text-align: center;
    }

    .banner a {
      color: #fff;
      text-decoration: none;
      margin-left: 20px;
      position: relative;
      text-align: center;
    }

    .banner a::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2px;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.3s ease-in-out;
      text-align: center;
    }
    .about{
      white-space: nowrap;
    }
    .banner a:hover::before {
      background-color: rgba(255, 255, 255, 0.3);
    }

    .content {
      margin: 100px auto; /* Change the margin-top value to adjust the vertical position */
      max-width: 800px;
      text-align: center; /* Add this line to center-align the text */
      scrollbar-width: none;
    }


    .programming-language {
      font-weight: bold;
    }

    h1 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      margin-bottom: 10px;
    }

    /* ... (rest of the CSS styles) ... */

    /* Keyword colors */
    .keyword1 {
      color: #ff5f5f;
      font-weight: bold;
    }

    .keyword2 {
      color: #00ff8c;
      font-weight: bold;
    }

    .keyword3 {
      color: #00aaff;
      font-weight: bold;
    }

    .keyword4 {
      color: #ffcc00;
      font-weight: bold;
    }

    .keyword5 {
      color: #ff00ff;
      font-weight: bold;
    }
    .keyword6 {
      color: #8dff00;
      font-weight: bold;
    }
    .keyword7 {
      color: #ff5f5f;
      font-weight: bold;
    }
    .keyword8 {
      color: #00ff8c;
      font-weight: bold;
    }
    .keyword9 {
      color: #ffcc00;
      font-weight: bold;
    }

    /* Curved box styles */
    .curved-box {
      position: relative;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .curved-box::before {
      content: "";
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      background: linear-gradient(to bottom right, #450b73, #23063a);
      border-radius: 30px;
      z-index: -1;
    }

    /* Banner at the bottom */
    .bottom-banner {
      background-color: #2a2a2a;
      color: #fff;
      padding: 10px;
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .bottom-banner a {
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
      font-size: 20px;
    }
  </style>
</head>
<body>
<div class="banner">
  <a class="github-link" href="https://github.com/AMAZINGMAN2" target=”_blank”>
    <img class="github-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub Logo">
    &nbsp;&nbsp;GitHub
  </a>
  <div class="home">
    <a href='/'>Home</a>
    <a class='about' href='/about'>About Me</a>
  </div>
  <a href="https://www.youtube.com/@hashimalmuqbel2000" target="_blank">
    <img class="youtube-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="YouTube Icon">
    &nbsp;YouTube Channel</a>
</div>

<div class="content">
  <h1>About Me</h1>

  <p>
    My name is Hashim Almuqbel and I am a passionate software engineer with a focus on game development and programming. I have extensive experience in various programming languages and technologies, including <b class="keyword2">C#</b>, <b class="keyword3">C++</b>, <b class="keyword4">Unity</b>, <b class="keyword5">Python</b>, and <b class="keyword6">SQL</b>.
  </p>

  <p>
    I started my journey in the world of programming by learning C++ and exploring its low-level capabilities. As I delved deeper into the field, I discovered the power of <b class="keyword1">C#</b> and its seamless integration with Unity, a game development engine. I have since developed numerous interactive applications and games using Unity and leveraged the features of C# to create engaging experiences.
  </p>

  <p>
    Python has become another one of my favorite languages due to its simplicity and versatility. I have utilized Python for web development projects,<b class="keyword9"> data analysis</b>, and <b class="keyword3"> automation tasks </b>. The vast collection of libraries and frameworks available in Python allows me to tackle complex problems efficiently.
  </p>

  <p>
    SQL plays a crucial role in my goal to be a software engineer, as I rely on it for efficient data management. I have designed and optimized <b class="keyword8">databases</b>, ensuring smooth data retrieval, manipulation, and storage. SQL's powerful querying capabilities have helped me handle large datasets and build robust applications.
  </p>

  <p>
    My passion for game development extends beyond coding. I also have a strong understanding of <b class="keyword7">networking</b>  in the context of Unity, enabling me to create seamless multiplayer experiences and handle synchronization challenges.
  </p>

  <p>
    Through my projects and experiences, I strive to create <b class="keyword5">high-quality software</b> solutions that combine functionality, performance, and user satisfaction. I am continuously expanding my knowledge and exploring new technologies to stay at the forefront of the rapidly evolving software industry.
  </p>

  <p>
    Thank you for visiting my About Me page. If you have any questions or would like to collaborate on a project, feel free to get in touch through my email at the bottom of this <b class="keyword3">website</b>.
  </p>

  <!-- Q&A section will be generated here by the script.js -->
</div>

<div class="bottom-banner">
  <a href="https://github.com/AMAZINGMAN2" target="_blank">GitHub</a>
  <a href="https://www.youtube.com/@hashimalmuqbel2000" target="_blank">YouTube</a>
  <a href="mailto:hashim.almuqbel@gmail.com" target="_blank">hashim.almuqbel@gmail.com</a>
</div>
<script src="script.js"></script>
</body>
</html>
