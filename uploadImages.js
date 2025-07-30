const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-03-07', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_API_TOKEN, // You might need to create an API token with write access
  useCdn: false, // Don't use CDN for writing
});

const imagePaths = [
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/2543.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/4897a.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/5D4_4601.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/5D4_4596.JPG',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/5D4_4730.JPG',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/5DK_4775.JPG',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/5D4_5043.JPG',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/5D4_4822.JPG',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/321164758_5686230301491364_7432607898298865967_n.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/281291_122769697816696_6770753_n_0.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Inatut.png',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Inatut_render.webp',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/PTC-CB-2011 (165).JPG',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Les Mis/283149057_4869773916479156_1606374280283933525_n.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Les Mis/283009025_4863584080431473_5414441567147978353_n.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Les Mis/281556460_4851934281596453_6915893028049130450_n.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Les Mis/277247665_4728783013911581_4451772993394330053_n.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Les Mis/277246502_4728782763911606_2615558518710283087_n.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/Salvation Army 1.png',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/headshots/platinum-b-headshot.png',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/headshots/Tim-McDonald-2018-107 copy.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/headshots/Tim-McDonald-2018-15.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/headshots/Tim-McDonald-2018-6-copped.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/headshots/Tim-McDonald-2018-60-portrait.jpg',
  '/Users/timothymcdonald/Code/timothyjamesactor/source_images/headshots/Timothy James - glasses.png',
];

async function uploadImages() {
  console.log('Starting image upload to Sanity...');
  for (const imagePath of imagePaths) {
    try {
      const imageBuffer = fs.readFileSync(imagePath);
      const asset = await client.assets.upload('image', imageBuffer, {
        filename: path.basename(imagePath),
      });
      console.log(`Uploaded ${path.basename(imagePath)}:`, asset._id);
    } catch (error) {
      console.error(`Failed to upload ${path.basename(imagePath)}:`, error.message);
    }
  }
  console.log('Image upload process completed.');
}

uploadImages();
