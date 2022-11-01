# CSUS-mentorship-project
This app will satisfy your tastebuds

# Contributors

Daniel Luo : djgruau101

Christina Chen : Chris1C

Minna Feng : To Be Updated

# Context:

We want to create an app that fulfills the needs of people looking for recipes based on their tastes, ingredients, time, availability, budget, number of servings, etc. This is geared mostly at people who have limitations on their time and ingredients. Our end-goal is for our app to give accurate recommendations based on users’ tastes, using machine learning.

# Benefits and/or risks to the team:

TBD during implementation

# Implementation details

For the front-end component, we will mostly be using React Native as it is a mobile app. As we do not know about this framework yet, we can use HTML, CSS and JavaScript for the time being and we will see how to merge them together.

For the machine learning component of our app, we will be using the collaborative filtering technique. Our model will be trained on the data from the following datasets : https://www.kaggle.com/datasets/irkaal/foodcom-recipes-and-reviews and 
https://www.kaggle.com/code/paultimothymooney/explore-recipe-nlg-dataset/data. The data labels are already given. In the first dataset, each recipe contains features regarding cooking time, preparation time, etc. In the second dataset, each recipe contains features regarding the ingredients used.

For the back-end portion, we will use either Flask or Django, both good for Python web development. SQL may be needed if we have to work with databases.

# Comparison between different design choices

We choose React Native for our app development because it allows us to accomodate multiple platforms. Furthermore, we choose to use Flask because Daniel has more familiarity with Flask as compared to Django. Since we have a time constraint of 2 months to build the app, it is better to use technologies we are more comfortable with.

# Any hard design decisions that cannot be reverted later

As of now, the only tool that we will have to stick with is React Native.

# Rollout

Here are the ordered steps we will take for rollout: app deployment (mobile side), UI/UX, back-end and ML recommendation

# Rollback

Since we will be using GitHub for version control, if ever we encounter an issue with the current version of our app, we will rollback and use the previous committed version. We estimate it will take us 20 to 30 minutes to get back on track.

# Testing

To test the machine learning component, we will determine the testing accuracy after having trained and validated our model. This will allow us to choose the optimal values for hyperparameters. On the front-end and back-end side, we will test the behavior of all the buttons and input text fields and we will assess the styling of the elements. The testing framework we will use for React Native is Jest. Other tests we will include are integration tests, testing user interaction, rendered output and end-to-end tests.

# Tracing 

We will use Jira to keep track of our task progress and track any issues/bugs. 

# Future extensions/Narrative

In the future, after our initial app launches, we will like to test our app features on actual clients and get their feedback. We would then improve our product based on their feedback.

We will also like our app to give users recipe recommendations, based on its calorie count and other additional features that clients would like to have.
