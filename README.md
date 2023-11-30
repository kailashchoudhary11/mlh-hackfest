<h1 align="center">MLHConnectBot</h1>

## Inspiration
Our inspiration for this project stemmed from the enthusiasm and passion within the tech community, particularly for Major League Hacking (MLH) events. We recognized a need for a more accessible and convenient way to keep up-to-date with MLH activities. Many aspiring developers, hackers, and tech enthusiasts often miss out on these opportunities due to the sheer volume of information or lack of timely updates. We aimed to bridge this gap by creating a Discord bot that automates the process of fetching and sharing MLH event, hackathon, and fellowship updates.

## What it does
Our Discord bot serves as a central hub for MLH-related information within Discord communities. It fetches real-time updates from the MLH website through web scraping techniques implemented using Node.js, Express, MongoDB, and Puppeteer. Users can simply invoke specific commands to retrieve information about ongoing and upcoming events, hackathons, and fellowship opportunities. The bot seamlessly integrates into Discord servers, providing instant access to the latest MLH updates without the need to navigate external websites.

## How we built it
Using Node.js as our primary framework and Puppeteer for web scraping, we constructed a robust system that efficiently extracts relevant data from the MLH website. We stored this data in MongoDB to ensure easy retrieval and management. Additionally, we implemented an intuitive command-based interface within the Discord bot, enabling users to request information with simple commands. This involved meticulous coding and integration to ensure smooth communication between the bot, database, and Discord servers.

## Challenges we ran into
Developing this project presented several challenges, primarily centered around the dynamic nature of web content on the MLH website. Adapting our web scraping mechanisms to accommodate frequent changes in the website's structure required continuous adjustments and fine-tuning. Ensuring the accuracy and reliability of the fetched data amidst these alterations was a persistent challenge. Additionally, optimizing the bot's performance while handling large volumes of data without overwhelming Discord servers posed technical hurdles that demanded careful consideration and optimization.

## Accomplishments that we're proud of
Despite the challenges, we're immensely proud of achieving a functional Discord bot that seamlessly delivers MLH updates to users. Overcoming the complexities of web scraping and integrating this feature into our bot was a significant milestone. We take pride in creating a reliable system that promptly retrieves, stores, and disseminates accurate MLH information, enhancing accessibility for tech enthusiasts. Moreover, our successful implementation of command-based functionalities within Discord, enabling users to effortlessly access real-time updates, stands as a testament to our team's dedication and technical proficiency. 

## What we learned
Throughout this project, we acquired invaluable knowledge and experience in various domains. From honing our web scraping techniques to refining our Discord bot development skills, each phase provided insights into efficient data management and integration. We learned to adapt swiftly to changing web structures, devising solutions to extract accurate information reliably. Additionally, this project enhanced our collaborative problem-solving abilities and reinforced the significance of user-friendly design in delivering a seamless experience. We also had a great time bonding and building this hackathon. We also connected with any people online in the MLH discord community and enjoyed joining Hack Nights.

## What's next for Project
Looking ahead, our goal is to further enhance the bot's capabilities by implementing personalized notification preferences for users. This includes refining the bot's filtering mechanisms to allow users to specify event types, locations, or specific criteria for receiving updates. We aim to optimize the scraping process for increased efficiency and reliability while exploring the integration of additional features that foster user engagement. These may include interactive commands, user-specific event tracking, or community engagement functionalities to create a more interactive and inclusive environment within Discord servers.

