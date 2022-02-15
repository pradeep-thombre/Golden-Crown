const fs = require('fs');
var emblemMap = new Map();

function setMapData(){

    emblemMap.set("LAND", "panda");
    emblemMap.set("WATER", "octopus");
    emblemMap.set("ICE", "mammoth");
    emblemMap.set("AIR", "owl");
    emblemMap.set("FIRE", "dragon");
}


let alliesKingdomes;
let countOfAliesKingdoms;

module.exports.isRuling= async function (req,res){
    filePath=req.body.path;
    try{
        let data= await fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
        
		// list of aliases and count
		alliesKingdomes="SPACE ";
		countOfAliesKingdoms=0;
        setMapData();
        
        for(let i=0;i<data.length;i++) {

			// finding Kingdom name and secret Message from each line and emblem name from Map
            let kingdomName=data[i].split(" ",2)[0].toUpperCase();
            let secretMessage=data[i].replace(kingdomName,"").toLowerCase();
            // console.log(secretMessage);

			//check kingdom is exists or not
			if(emblemMap.has(kingdomName)) {
                let emblemName=emblemMap.get(kingdomName);
                let isWinner=checkWinner(emblemName,secretMessage);
                    
				if(isWinner) {
					// if space wins battle increament allies count and update list
					countOfAliesKingdoms++;
					alliesKingdomes+=kingdomName+" ";
						
					//removing from map to avoid repetition
					emblemMap.delete(kingdomName);
				}
            }
        }

        // if space got less then 3 allies he failed to win
		const minAliesRequired=3;
		if(countOfAliesKingdoms<minAliesRequired) {
            alliesKingdomes="NONE";
		}

		console.log(alliesKingdomes);
        res.status(200).json({
            success: true,
            data: alliesKingdomes,
        });

    }catch(err){

        // handling error if any 
        console.log("error",err);
        res.status(500).json({
            success: false,
            error: err,
        });
    }
}

function checkAlies(data){
    
}

var emblemCharMap;
function checkWinner(emblemName,secretMessage){
    emblemCharMap= new Map();

    //adds chars of emblemname in map
    addEmblemChars(emblemName);
	
    // decrypts secret message and removes chars from map
    checkSecretMessage(emblemName,secretMessage);
		
    if(emblemCharMap.size==0) {
		// if map is empty then Space wins battle
		return true;
	}
	
	// space failed to form allies 
	return false;
}

function addEmblemChars(emblemName){

    for(let i=0;i<emblemName.length;i++) { 
        let currentChar=emblemName.charAt(i);

        if(emblemCharMap.has(currentChar)) {
            // if char found, increament privious count by 1
            let previousCount=emblemCharMap.get(currentChar);
            emblemCharMap.set(currentChar, ++previousCount);

        }else {
            // else add char
            emblemCharMap.set(currentChar, 1);
        }
    }
}


function checkSecretMessage(emblemName,secretMessage){
    // ciper key is length of emblemname
		let cipherKey=emblemName.length;
		
		for(let i=0;i<secretMessage.length;i++) {
	
			//decrypting current character
			let currentChar=secretMessage.charAt(i);
			let decryptedChar=String.fromCharCode(((currentChar.charCodeAt(0)-97-cipherKey+26)%26)+97);

			// check decryptedChar in map  
			if(emblemCharMap.has(decryptedChar)) {
				
				if(emblemCharMap.get(decryptedChar)>1) {
					// if count is more then 1, decreament previous Count by 1
					let previousCount=emblemCharMap.get(decryptedChar);
					emblemCharMap.set(decryptedChar, --previousCount);
	
				}else {
					// else remove char from Map 
					emblemCharMap.delete(decryptedChar);
				}
			}	
		}
}