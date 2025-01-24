import axios from 'axios';



const searchLine = process.argv[2];

if (!searchLine) {
  console.error('Please provide a line of code to search for.');
  process.exit(1);
}

const checkCode = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    if (html.includes(searchLine)) {
      console.log(`Found in ${url}`);
    }
  } catch (error) {
    console.error(`Error checking ${url}:`, error.message);
  }
};

urls.forEach((url) => checkCode(url));
