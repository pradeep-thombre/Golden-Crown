const chai=require('chai');
const  assert=chai.assert;
const should=chai.should();
const expect=chai.expect;
const chaiHttp=require('chai-http');
chai.use(chaiHttp);

var server=require('../geektrust');



function test(){
    for(let i=1;i<7;i++){
        describe('test '+i,function(){

            // sending request with data in query 
            it('Test case '+i,  () =>{
                chai.request(server)
                .post("/")
                .type('form')
                .send({
                    path:'..\\Testcases\\input'+i+'.txt'
                })
                .end((err,res)=>{
                        expect(res.status).to.be.equal(200);
                        console.log(res.text);
                })
            })
        })
    }
}

test();

// Test case 7
describe('test 7',function(){

    // sending request with data in query 
    it('Test case 7',  () =>{
        chai.request(server)
        .post("/")
        .type('form')
        .send({
            path:'C:\\Users\\Prade\\Downloads\\GeekTrustGoldenCrownChallenge-master\\GeekTrustGoldenCrownChallenge-master\\input1.txt'
        })
        .end((err,res)=>{
                expect(res.status).to.be.equal(200);
                console.log(res.text);
        })
    })
})