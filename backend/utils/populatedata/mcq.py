from typing import List
from pydantic import Json

mcqs: List[Json] = [
    {
        "question": "You have placed an image in a directory named images and want to reference it from a page located in the root of your site. Which choice would correctly display the image on the page?",
        "answers": ["< img src='image.jpg'>", "< a href='images/image.jpg'>", "< img src='images/image.jpg'>", "< img href='image.jpg" > ''],
        "correct_answer": "< img src='image.jpg'>",
        "target_field_id": 1
    },
    {
        "question": "Which choice is not a value of the type attribute of the <input> element?",
        "answers": ["range", "address", "date", "password"],
        "correct_answer": "address",
        "target_field_id": 1
    },
    {
        "question": "The browser finds some CSS that it does not understand. What is likely happen?",
        "answers": ["The page will not display", "An error message will be displayed ", "The browser will not load the stylesheet", "The browser will ignore the unknown CSS"],
        "correct_answer": "The browser will ignore the unknown CSS",
        "target_field_id": 1
    },
    {
        "question": "What is Webpack primarily used for?*",
        "answers": ["sharing JavaScript code with other people ", "making JavaScript-reliant sites accessible to users who do not have JavaScript turned on", "bundling individual JavaScript files for use in your website", "source control"],
        "correct_answer": "bundling individual JavaScript files for use in your website",
        "target_field_id": 1
    },
    # {
    #     "question": "what is fastapi",
    #     "answers": ["sql", "fastapi", "server", "django"],
    #     "correct_answer": "fastapi",
    #     "target_field_id": 2
    # },
    # {
    #     "question": "what is django",
    #     "answers": ["sql", "fastapi", "server", "django"],
    #     "correct_answer": "django",
    #     "target_field_id": 2
    # },
    {
        "question": "Which CSS property will not trigger layout recalculation?*",
        "answers": ["top", "opacity", "width ", "height"],
        "correct_answer": "opacity",
        "target_field_id": 1
    },
    {
        "question": "How does the rem unit represent a font size?*",
        "answers": ["Font sizes are expressed relative to the font size of the containing div element", "Font sizes are expressed relative to the font size of the parent elements", "Font sizes are relative to the base font size of the operating system.", "Font sizes are relative to the root em unit used in the HTML element."],
        "correct_answer": "Font sizes are relative to the root em unit used in the HTML element.",
        "target_field_id": 1
    },
    {
        "question": "Variables declared with the let keyword have what type of scope?",
        "answers": ["function scope ", "block scope", "inline scope", "global scope"],
        "correct_answer": "block scope",
        "target_field_id": 2
    },
    {
        "question": "Which statement is true when an HTML tag has been deprecated?*",
        "answers": ["It employs code that can be viewed only on a desktop computer", "It is obsolete and is not recommended for use in marking web content", "It employs code that will require users to update their browsers ", "It employs incorrect syntax that will cause the browser to crash"],
        "correct_answer": "It is obsolete and is not recommended for use in marking web content",
        "target_field_id": 2
    },
    {
        "question": "A video on your webpage does not display and the console shows an error about mixed content. What is happening?*",
        "answers": ["The webapge is using a DOCTYPE, which renders it incapable of displayed video in addition to other web content.", "Your browser does not support HTML5 video.", "The video is from a source that cannot be displayed in your location for legal reasons. ", "The page is loaded via HTTPS, but the video is being served insecurely as HTTP and the browser is blocking it."],
        "correct_answer": "The page is loaded via HTTPS, but the video is being served insecurely as HTTP and the browser is blocking it.",
        "target_field_id": 2
    },
    {
        "question": "Which line of code, if applied to all flex items in a flex container, would cause each flex item to take up an equal share of the total width of the container? For example, if there are four items, they would get 25% of each/*",
        "answers": ["flex: 1 0 0;", "flex: initial;", "flex: 1 1 auto; ", "flex: 1 0 auto;"],
        "correct_answer": "flex: 1 1 auto; ",
        "target_field_id": 2
    },
    {
        "question": "Which part of the URL https://app.uniswap.org/pool specifies the domain name*",
        "answers": ["https", "org ", "uniswap.org", "app.uniswap"],
        "correct_answer": "uniswap.org",
        "target_field_id": 2
    },
    # {
    #     "question": "React component can return how many components ",
    #     "answers": ["one", "multiple", "two", "three"],
    #     "correct_answer": "one",
    #     "target_field_id": 1
    # },
    # {
    #     "question": ". Must API for every ReactJs component ",
    #     "answers": [" SetinitialComponent", "renderComponent", "render", " All of the above"],
    #     "correct_answer": "renderComponent",
    #     "target_field_id": 1
    # }, {
    #     "question": "Babel is ",
    #     "answers": ["Compiler", "Transpilar", " None of the above", " Both A and B"],
    #     "correct_answer": " Compiler",
    #     "target_field_id": 1
    # },
    # {
    #     "question": "You have a set of images that are slightly different sizes and aspect ratios. You don't mind if you crop off some of the image, but you want each image to completely fill a square box without being distorted. Which property and value would achieve this?*",
    #     "answers": ["object-fit: contain", "object-fit: stretch", "object-fit: all", "object-fit: cover"],
    #     "correct_answer": "django",
    #     "target_field_id": 1
    # },
    # {
    #     "question": "Which array method should you apply to run a function for every item within an array, returning an array of all items for which the function is true?*",
    #     "answers": ["every()", "map()", "forEach() ", "filter()"],
    #     "correct_answer": "filter()",
    #     "target_field_id": 1
    # },
    # {
    #     "question": "You have created a box that has a height set with CSS. Which line of CSS would add scroll bars if the content is taller than the box, but leave no visible scroll bars if the content fits into the box?*",
    #     "answers": [".box { overflow: scroll; }", ".box { overflow: scroll-x; }", ".box { overflow: auto; } ", ".box { overflow: none; }"],
    #     "correct_answer": ".box { overflow: auto; } ",
    #     "target_field_id": 1
    # },
    # {
    #     "question": "Your website uses CSS Grid Layout extensively, and a visitor who navigates using the keyboard tells you that they seem to jump erratically all over the screen when navigating. What is the most likely problem?",
    #     "answers": ["The visitor's browser does not have full support for CSS Grid Layout.  ", "Items have been positioned in such a way that they are in a different order to the source.", "The browser has a keyboard navigation bug.", "You need to add the tab index attribute to elements."],
    #     "correct_answer": "Items have been positioned in such a way that they are in a different order to the source.",
    #     "target_field_id": 1
    # },
    # {
    #     "question": "The flex property is often applied to flex items with a value of 1. Using flex: 1 is a shorthand - what does it unpack to?*",
    #     "answers": ["flex: 0 0 100;", "flex: 1 0 0; ", "flex: 0 0 auto;", "flex: 1 1 auto;"],
    #     "correct_answer": "flex: 1 0 0; ",
    #     "target_field_id": 1
    # },
    # {
    #     "question": "what is django",
    #     "answers": ["sql", "fastapi", "server", "django"],
    #     "correct_answer": "django",
    #     "target_field_id": 1
    # },
    # {
    #     "question": "Which choice is not a render blocking resource?",
    #     "answers": ["images", "HTML", "CSS", "JavaScript"],
    #     "correct_answer": "django",
    #     "target_field_id": 1
    # },



    {
        "question": "You work in a data science team that wants to improve the accuracy of its K-nearest neighbor result by running on top of a naive Bayes result. What is this an example of?",
        "answers": ["Regression", "Boosting", "Bagging ", "Stacking"],
        "correct_answer": "Stacking",
        "target_field_id": 4
    },
    {
        "question": "Your university wants to use machine learning algorithms to help sort through incoming student applications. An administrator asks if the admissions decisions might be biased against any particular group, such as women. What would be the best answer?*",
        "answers": ["Machine learning algorithms are based on math and statistics, and so by definition will be unbiased.", "There is no way to identify bias in the data.", "Machine learning algorithms are powerful enough to eliminate bias from the data.", "All human-created data is biased, and data scientists need to account for that."],
        "correct_answer": "All human-created data is biased, and data scientists need to account for that.",
        "target_field_id": 4
    },
    {
        "question": "To predict a quantity value. use ___.*",
        "answers": ["Regression", "Clustering", "Classification", "Dimensionality Reduction"],
        "correct_answer": "Regression",
        "target_field_id": 4
    },
    {
        "question": "Self-organizing maps are specialized neural network for which type of machine learning?*",
        "answers": ["Semi-supervised Learning", "Supervised Learning", "Reinforcement Learning", "Unsupervised Learning"],
        "correct_answer": "Semi-supervised Learning",
        "target_field_id": 4
    }, {
        "question": "In traditional computer programming, you input commands. What do you input with machine learning?*",
        "answers": ["Patterns", "Programs", "Rules", "Data"],
        "correct_answer": "Data",
        "target_field_id": 4
    },
    # {
    #     "question": "What is one reason not to use the same data for both your training set and your testing set?*",
    #     "answers": ["You will almost certainly underfit the model.", "You will pick the wrong algorithm.", "You might not have enough data for both.", "You will almost certainly overfit the model."],
    #     "correct_answer": "django",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "How is machine learning related to artificial intelligence?*",
    #     "answers": ["Artificial intelligence focuses on classification, while machine learning is about clustering data.", "Machine learning is a type of artificial intelligence that relies on learning through data.", "Artificial intelligence is form of unsupervised machine learning.", "Machine learning and artificial intelligence are the same thing."],
    #     "correct_answer": "Machine learning is a type of artificial intelligence that relies on learning through data.",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "Which statement about K-means clustering is true?*",
    #     "answers": ["In K-means clustering, the initial centroids are sometimes randomly selected.", "K-means clustering is often used in supervised machine learning.", "The number of clusters are always randomly selected.", "To be accurate, you want your centroids outside of the cluster."],
    #     "correct_answer": "The number of clusters are always randomly selected.",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "What is stacking?*",
    #     "answers": ["The predictions of one model become the inputs another.", "You use different versions of machine learning algorithms.", "You use several machine learning algorithms to boost your results.", "You stack your training set and testing set together."],
    #     "correct_answer": "You use several machine learning algorithms to boost your results.",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "____ looks at the relationship between predictors and your outcome.*",
    #     "answers": ["Regression analysis", "K-means clustering", "Big data", "Unsupervised learning"],
    #     "correct_answer": "Regression analysis",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "The new dataset you have just scraped seems to exhibit lots of missing values. What action will help you minimizing that problem?*",
    #     "answers": ["Wise fill-in of controlled random values", "Replace missing values with averaging across all samples", "Remove defective samples", "Imputation"],
    #     "correct_answer": "Imputation",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "Which loss function would fit best in a categorical (discrete) supervised learning ?*",
    #     "answers": ["kullback-leibler (KL) loss", "Binary Crossentropy", "Mean Squared Error (MSE)", "Any L2 loss"],
    #     "correct_answer": "Binary Crossentropy",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "What is lazy learning?*",
    #     "answers": ["when the machine learning algorithms do most of the programming", "when you don't do any data scrubbing", "when the learning happens continuously", "when you run your computation in one big instance at the beginning"],
    #     "correct_answer": "when you run your computation in one big instance at the beginning",
    #     "target_field_id": 4
    # }, {
    #     "question": "In statistics, what is defined as the probability of a hypothesis test of finding an effect - if there is an effect to be found?*",
    #     "answers": ["confidence", "alpha", "power", "significance"],
    #     "correct_answer": "power",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "The activations for class A, B and C before softmax were 10, 8 and 3. The different in softmax values for class A and class B would be :*",
    #     "answers": ["76%", "88%", "12%", "0.0008%"],
    #     "correct_answer": "76%",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "Mostly whenever we see kernel visualizations online (or some other reference) we are actually seeing:",
    #     "answers": ["What kernels extract", "Feature Maps", "How kernels Look", "How kernels Look"],
    #     "correct_answer": "What kernels extract",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "Which of the following methods can use either as an unsupervised learning or as a dimensionality reduction technique?*",
    #     "answers": ["SVM", "PCA", "LDA", "TSNE"],
    #     "correct_answer": "PCA",
    #     "target_field_id": 4
    # },
    # {
    #     "question": "You need to select a machine learning process to run a distributed neural network on a mobile application. Which would you choose?*",
    #     "answers": ["Scikit-learn", "PyTorch", "Tensowflow Lite", "Tensorflow"],
    #     "correct_answer": "Tensowflow Lite",
    #     "target_field_id": 4
    # }, {
    #     "question": "What does it mean to underfit your data model?*",
    #     "answers": ["There is too much data in your training set.", "There is too little data in your training set.", "There is not a lot of variance but there is a high bias.", "Your model has low bias but high variance."],
    #     "correct_answer": "There is not a lot of variance but there is a high bias.",
    #     "target_field_id": 4
    # }, {
    #     "question": "Many of the advances in machine learning have come from improved?*",
    #     "answers": ["structured data", "algorithms", "computer scientists", "time"],
    #     "correct_answer": "algorithms",
    #     "target_field_id": 4
    # },
    {
        "question": "On which of the following, developers can test the application, during developing the android applications?",
        "answers": ["	Third-party emulators", "Emulator included in Android SDK", "   	Physical android phone", "	All of the above"],
        "correct_answer": "	All of the above",
        "target_field_id": 3
    },
    {
        "question": "Which of the following kernel is used in Android?",
        "answers": ["MAC", "Windows", "Linux", "Redhat"],
        "correct_answer": "Linux",
        "target_field_id": 3
    },
    {
        "question": "Which of the following is the first callback method that is invoked by the system during an activity life-cycle?",
        "answers": ["onClick() method", "onCreate() method", "onStart() method", "onRestart() method"],
        "correct_answer": "onCreate() method",
        "target_field_id": 3
    },
    {
        "question": "We require an AVD to create an emulator. What does AVD stand for?",
        "answers": ["Android Virtual display", "Android Virtual device", "Active Virtual display", "Active Virtual device"],
        "correct_answer": "Android Virtual device",
        "target_field_id": 3
    },
    {
        "question": "Which of the following is contained in the src folder?",
        "answers": ["XML", "Java source code ", "Manifest", "None of the above"],
        "correct_answer": "Java source code ",
        "target_field_id": 3
    },
    # {
    #     "question": "Which of the following android component displays the part of an activity on screen?",
    #     "answers": ["View", "Manifest", "Intent", "Fragment"],
    #     "correct_answer": "Manifest",
    #     "target_field_id": 3
    # },
    # {
    #     "question": "In which of the following tab an error is shown?",
    #     "answers": ["CPU", "Memory", "ADB Logs", "Logcat"],
    #     "correct_answer": "Logcat",
    #     "target_field_id": 3
    # },
    # {
    #     "question": "Which of the following is the name of the Android version 1.5?",
    #     "answers": ["Eclair", "Froyo", "Cupcake", "Donut"],
    #     "correct_answer": "Cupcake",
    #     "target_field_id": 3
    # },
    # {
    #     "question": "Which of the following is the topmost layer of android architecture?",
    #     "answers": ["System Libraries and Android Runtime", "Linux Kernel", "Applications", "Applications Framework"],
    #     "correct_answer": "Applications",
    #     "target_field_id": 3
    # },
    # {
    #     "question": "Which of the layer is the lowest layer of android architecture?",
    #     "answers": ["System Libraries and Android Runtime", "Linux Kernel ", "Applications", "Applications Framework"],
    #     "correct_answer": "Linux Kernel",
    #     "target_field_id": 3
    # },
    {
        "question": "Which of these is correct about data mining?",
        "answers": ["It is a procedure in which knowledge is mined from data.", "It involves processes like Data Transformation, Data Integration, Data Cleaning.", "It is a procedure using which one can extract information out of huge sets of data", "All of the above"],
        "correct_answer": "All of the above",
        "target_field_id": 6
    },
    {
        "question": "The total categories of functions that are involved in Data Mining are:",
        "answers": ["5", "4", "3", "2"],
        "correct_answer": "2",
        "target_field_id": 6
    },
    {
        "question": "The classification or mapping of a class using a predefined class or group is called:",
        "answers": ["Data Sub Structure", "Data Set", "Data Discrimination", "Data Characterisation"],
        "correct_answer": "●	Data Discrimination",
        "target_field_id": 6
    },
    {
        "question": "What is the analysis conducted for uncovering some interesting statistical correlations between various associated-attribute-value pairs called?",
        "answers": ["Mining of Clusters", "Mining of Correlations", "Mining of Association", "None of the above"],
        "correct_answer": "Mining of Correlations",
        "target_field_id": 6
    },
    {
        "question": " __________ are the data objects that don’t comply with the general model or behaviour of the available data:",
        "answers": ["Evolution Analysis", "Outlier Analysis", "Classification", "Prediction"],
        "correct_answer": "Outlier Analysis",
        "target_field_id": 6
    },
    {
        "question": "Which of the following methods DOES NOT prevent a model from overfitting to the training set?",
        "answers": ["Early stopping", "Pooling", "Dropout", "Data augmentation"],
        "correct_answer": "Pooling",
        "target_field_id": 5
    },
    {
        "question": "In which of the following applications can we use deep learning to solve the problem?",
        "answers": ["Detection of exotic particles", "Protein structure prediction", "Prediction of chemical reactions", "All of the above"],
        "correct_answer": "All of the above ",
        "target_field_id": 5
    },
    {
        "question": "Which of the following statements is true when you use 1×1 convolutions in a CNN?",
        "answers": ["It can be used for feature pooling", "It suffers less overfitting due to small kernel size", "It can help in dimensionality reduction", "All of the above"],
        "correct_answer": "All of the above ",
        "target_field_id": 5
    },
    {
        "question": "RNNs stands for?",
        "answers": ["Recurrent Neural Networks", "Report Neural Networks", "Recording Neural Networks", "Receives Neural Networks"],
        "correct_answer": "Recurrent Neural Networks",
        "target_field_id": 5
    },
    {
        "question": "Assume that your machine has a large enough RAM dedicated to training neural networks. Compared to using stochastic gradient descent for your optimization, choosing a batch size that fits your RAM will lead to::",
        "answers": ["a less precise and slower update.", "a less precise but faster update.", "a more precise but slower update.", "a more precise and faster update."],
        "correct_answer": "a more precise but slower update.",
        "target_field_id": 5
    },


]
