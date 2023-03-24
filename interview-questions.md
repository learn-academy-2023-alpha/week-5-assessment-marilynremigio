# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: In ruby, there is something called class inheritance, which expresses a relationship between classes. Calling a super means a subclass or child class wants to pull information or inherit from a superclass, also known as the parent class. Superclasses have a collection of similiar data and when a subclass with unique data needs to pull that information, we call on super.

Researched answer: Super is a keyword in Ruby which calls on the Superclass implementation of the method we're currently working with. It passes information from the original method to the current one or from the Parent class to a Child class. How it works is that the Subclass has an initialize method which will invoke the Superclass and take in the same arguments in order to create a new instance of the argument, but with specific information of the subclass. To inherit we use the < symbol as such: Subclass < Parent.

2. What is a gem?

Your answer: A gem is a library of code for Ruby. Similar to YARN being a package manager for dependencies, there is a Ruby package manager for gems.

Researched answer: A gem is a library that holds code, documentation, and specifications on the gem. With each gem, it has a name, version, and platform. The package manager for gems is simply called RubyGems. All gems are organized in the same format which shows the lib directory that contains the code snippets, the test directory which contains tests dependent on the framework a developer is using, and usually a Rakefile which automates tests and generates code.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a table of information where separate pieces of data are related to each other. A visual example would be similiar to an Excel spreadsheet with columns and rows. I believe there are many different kinds of databases, but I'm most familiar with relational databases.

Researched answer: A relational database was designed in the 1970s and most commonly uses SQL or Structured Query Language to use CRUD operations on data. CRUD stands for creating, reading, updating, and deleting. In a relational database, information is stored in a table with columns and rows. The data in each row has a primary key to uniquely identify it. Separate tables can associate to one another using a foreign key. This relationship is the has_many, belongs_to relationship. Other kinds of databases include hierarchical, non-relational, and object-oriented databases. Hierarchical databases are similar to a family tree, where there are "parent" objects and one or more "child" objects beneath it. A NoSQL database is one that is non-relational. Examples are MongoDB and Redis. Another type of database is an object-oriented database, where objects are stored and managed on a server's disk. OOP is the most common programming structure, so having these databases makes programming fast and powerful.

4. What are primary keys? Why are they important?

Your answer: A primary key is a unique identifier of data in a model, typically a number assigned to the data within a list. Primary keys are important so that we can locate information and keep data organized. 

Researched answer: Having primary keys gives a way for data in a relational database to be identified. Every row in a table will have a unique ID or primary key to ensure that data with the same or similiar information doesn't get mixed up and can be located separately by their primary key. For example if we had a table model of the Alpha Cohort and one column was Name, we'd have about 20 rows in the Name column, each with a student's personal name. Along with the name is an assigned primary key which would be numbers 1-20. Each name can only be assigned one primary key and this is helpful if there were 2 Marilyn's in the class. One Marilyn R. and a Marilyn M. To differentiate the Marilyn's, we would refer to their primary keys.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are get, post, put, patch, and delete. CRUD is the developer's philosophy to include each of these elements in a successful application: Create, Read, Update, and Delete. A get request corresponds to reading or displaying content. A post request corresponds to creating new content. A put request is updating and replacing content. A patch request is updating and editing content, and lastly, a delete request corresponds to removing content. 

Researched answer: The most commonly used HTTP verbs are post, get, put, patch, and delete. To initiate a post request, we are creating a new resource. Once sucessful, we will get a return HTTP status of 201. The get request action is used to retrieve content or read a representation of a resource. Without errors, we will see XML or JSON returned with an HTTP response code of 200. If an error was to occur, we'd get a 404 or 400 status which means the resource was either not found or came from a bad request. A put request gives updating capabilites to replace content in a resource. Similarly, the patch request enables modifcations or edits to content, which updates the resources with only the changes required. Lastly, the delete request removes a resource. Deleting sucessfully will return a 200 HTTP status.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: A set of standards used for different types of languages to create clean, working, and reusable routes. It's purpose is to contain HTTP verbs and CRUD actions together.

2. Model validations: Ensures than only clean working data is saved in a database, which is important because full-stack applications rely on data. Validations protect the data to make sure anything not clean does not get saved.

3. Params: Short for parameters, to allow developers to include extra information without a URL

4. ERB: An extension that stands for embedded Ruby, which is a file structure that enables developers to code in HTML and Ruby. 

5. API: Stands for Application Programming Interface which allows two application systems to communicate through requests and responses and transmits data without a view
