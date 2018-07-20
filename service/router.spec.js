const axios = require("axios")
//引入断言库
const {expect} = require("chai")
const app = require("./app")
const supertest = require("supertest")
function request(){
    return supertest(app.listen())
}
describe("测试接口",function(){
    it("test接口测试",function(done){
        axios.get('http://localhost:3000/test')
            .then(function(res){
                expect(res.status).to.equal(200)
                console.log("请求数据成功~~")
                if(!res.data){
                    done()
                }else{
                    done(new Error("结果不符合预期！"))
                }
            })
            .catch(function(err){
                done(err)
            })

        // request('http://localhost:3000/test')
        // .expect(res.status).to.equal(200)
        // .end(function(res){
        //     console.log("res")
        //     if(res.data){
        //         done()
        //     }else{
        //         done(new Error("结果不符合预期！"))
        //     }
        // })
    })
})