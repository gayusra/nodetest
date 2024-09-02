
/*
create operations
insertOne - create one data object
insertMany - create many data object

Read operations
find() --- its find all data
find({name:'gayu'}) -- its finds that name of gayu All
findOne({name:'gayu'})  -- its find first one

update operations
updateOne({name:'gayu'},{$set:{age:23}})
updateOne({name:'gayu'},{$set:{email:'gayu@gmail.com',jobrole:'FsD'}}) ---- its updates one or more datas
updateMany({_id:{$in:[ObjectId('give id'),ObjectId('give id'),]}},{$set:{jobrole:'Fsd'}})


delete operations
deleteOne({name:'gayu'})  -- its deleted first  object document
deleteMany({name:'gayu'})  -- its delted multiple objects document

how to delete the collection
db.collectionname.drop()

how to delete the database
db.dropDatabase()


curser object 

find will not give all records
db.customers.find()
it keyword to show remaining records

another way 

db.customers.find().toArray()

projection

db.customers.find({},{name:1})  -- its filter and show only names
db.customers.find({},{_id:0,name:1}) -- its filter and show name only


db.customers.updateOne({name:'seema gupta'},{$set:{hobbies:['cooking','dancing']}})
db.customers.updateMany({name:{$in:['priya sigh','amit verma']}},{$set:[hobbies:['travel','sports']]})



db.customers.findOne({name:'priya'}).hobbies

Data modeling
db.stats()
db.getName()
db.getCollectionNames()
db.customers.countDocuments()

Operators
Logical operators
db.product.find({price:{$gt:}}) -- greater than
db.product.find({price:{$lt:}}) -- lower than
db.product.find({price:{$eq:}}) -- equal



*/