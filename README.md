# Golden crown


### Task
- There is no ruler in the universe of Southeros and pandemonium reigns. Shan, the gorilla king of the Space kingdom
wants to rule all Six Kingdoms in the universe of Southeros. He needs the support of 3 more kingdoms to be the ruler.
- Each kingdom has an animal emblem and Shan needs to send a message with the animal in the message to win them over.
- SPACE emblem - Gorilla, LAND emblem - Panda, WATER emblem - Octopus,
ICE emblem - Mammoth, AIR emblem - Owl, FIRE emblem - Dragon. 
### Your coding challenge is to have King Shan send secret message to each kingdom and win them over.
- Once he wins 3 more kingdoms, he is the ruler! The secret message needs to contain the letters of the animal in their emblem.
For example, secret message to the Land kingdom (emblem: Panda) needs to have the letter 'p','n','d' at-least once and 'a' atleast twice. If he sends "ahdvvnxxxautup" to the Land kingdom, he will win them over.
- King Shan wants to make sure his secret message is not found by his enemies easily. So he decides to use the oldest of the
ciphers 'Seasar cipher’. A cipher is a type of secret code, where you swap the letters around so that no-one can read your
message.

### Goal
- A web server that exposes an API to check King shan will Rule all 6 kingdoms or Not.


### Tech stack used
-  `NodeJS`  (a flexible Node.js web application framework) as beckend.
-  `fs` to read the content of input files.

## Install Dependencies

```
npm install
```

## Run the app
```
# Run in development mode
npm run devStart

# Run in production mode
npm start
```

## Exposed Api 
To get the text translation, we can Postman or any web browser and hit this API as follow:

```
{URL}/
```
Body containes form has field path stores Path of the input file. 

#URL- (http://localhost:8000) or Deployed link 

