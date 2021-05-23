# 💡Inspiration

Mental health is often an overlooked and stigmatized issue in many developing countries, in spite of its prevalence. According to a World Health Organisation (WHO) Report, major or minor mental illnesses requiring expert intervention is 7.5 per cent of India’s population. Also, estimates show that of roughly 60 million people with mental illnesses, about 90 per cent are currently not receiving treatment in India. The Covid-19 pandemic has highlighted the urgent need for reinvestment in mental health, as altered daily routines, financial pressures, extensive social isolation and information overload continues to take its toll on mental health.

Studies do show, however, that the population has begun to take mental health seriously, with 90% of survey respondents agreeing that mental health should be given as much consideration as physical health. Nonetheless, several physical and social infrastructural weaknesses in the system exist, resulting in:

1) **One in seven Indians** were affected by mental disorders of varying severity. The proportional contribution of mental disorders to the total disease burden in India has almost **doubled since 1990**. Substantial variations exist between states in the burden from different mental disorders and in their trends over time.

2) Many **mental health issues ending up getting detected and diagnosed too late**, leading to poorer outcomes and increased mortality, and

3) Patients who do end up seeking professional help end up with extremely infrequent appointments, due to India’s severe shortage of licensed psychiatrists (1 per 334,000 people). This leads to **patients having difficulty recounting what has happened since their last appointments**, and overworked **providers who may have difficulty keeping track of patient records.**

We witnessed a huge gap with the needs and the existing solutions hence, created **How You Doin'?**

# 💻 What it does

After downloading the extension (for right now, downloading the repository from Github and uploading it to Developer Mode in Extensions), users pin Serotonin, which has the icon of a smiley face. When clicked on, the responsive navigation bar with "Calendar," "Data," "Notes," and "Profile" appears along with six animated emojis that represent moods - happy, confused, alright, sad, mad, and explosive.

View Video for a More Accurate View

Calendar: Originally, the calendar is blank. When the user first clicks on an emoji, the day on the calendar changes color, correlating to the emoji. For example, the user clicks "Happy Emoji," the calendar day turns yellow, and the "Sad Emoji" causes the calendar day to turn blue. The calendar is fully functional with "Next," "Previous," and "Jump To [month and year]."

Data: An animated pie chart for the current month is shown with updated percentages when hovered upon. If the user chooses multiple moods throughout the day, the pie chat automatically updates.

Notes: A responsive, movable textbox where users write anything - notes, rants, feelings. Notes are saved with local storage, and users have the ability to choose the mood they feel when they write. The notes under "Show Notes" are color-coded with the mood.

Profile: A textbox where users write their phone-number, and the Twilio messaging API sends a text message to the user's phone number with the following message and user's data: "Hello! Welcome to Serotonin. Your monthly mood is [moods], weekly mood is [mood], and current mood is [mood]."

Everything is saved with local storage, even when the extension is paused or removed.

# 🔨 How we built it
We built the UI using:-
• Figma
The frontend is built on:-
• HTML
• SCSS
• JavaScript
The database is built on:-
• Chrome Local Storage API
The extension is deployed on:-
• Chrome Web Store 

# 🧠 Challenges we ran into
• Time constraints, figuring out how to successfully incorporate all the features we wanted. 
• We were using Chrome Storage API for the first time and had a hard time figuring out it's functionalities

# 🏅 Accomplishments that we're proud of
We are proud that we are able to create a solution which can help our generation and anybody who are facing any problem with their mental health.

# 📖 What we learned
We being a team of inexperienced developers got to learn a lot about the nuances of JavaScript, Chrome Local Storage API and we also used SCSS for the first time in this project. This hackathon has given us a lot of exposure to the world of Web Development and creating practical solutions. 

# 🚀 What's next for *How You Doin'?*
