function getData(firstName: string, lastName?: string){
    lastName ? console.log(`${firstName}${lastName}`) : console.log(`${firstName}`)
    
}
// getData("Batel")

function getData2(fullName:string, mail?: string): void{
    mail ? console.log(`${fullName}${mail}`): console.log(`${fullName}`)
}
// getData2("Batel Haiylo")

function getCatData(catAge: number, catType: string ,catName?: string): void{
    catName ? console.log(`${catName}${catAge}${catType}`) : console.log(`${catAge}${catType}`)
}
// getCatData(12,"siami","momo")

function greeting(text:string, bol: boolean= true):string{
    return bol ? `hello ${text}` :  `welcome ${text}`
}
// console.log(greeting("Batel",false))

function getText(firstName: string, lastName: string, text: string= "miss"): string{
    return `${firstName}${lastName}${text}`
}
// console.log(getText("Batel","Haiylo"))

function getNumTimes(text1:string,text2?: string,times:number = 1):void{
    for(let i =0; i<times; i++){
        text2 ? console.log(`${text1} ${text2}`) : console.log(`${text1}`)
    }
}
// getNumTimes("i love",null,4)

function sortChar(...strArr: string[]):void{
    strArr ? console.log(strArr.sort()) : console.log("no chars found to sort")
}
// sortChar()

function sortNums(...numArr: number[]):void{
    numArr ? console.log(numArr.sort((a:number,b:number): number => a-b)) : console.log("no numbers found to sort")
}
// sortNums(1,4,5,7)

function sortNums2(...numArr: number[]):void{
    numArr ? console.log(numArr.sort((a,b): number => b-a)) : console.log("no numbers found to sort")
}
// sortNums2(1,4,5,7)

function sortNames(...strArr: string[]):void{
    strArr ? console.log(strArr.sort()) : console.log("no names found to sort")
}
// sortNames("Batel","or","Lior","Aviel")

function sortStr(text: string = "end",...strArr: string[]): string[]{
    strArr.push(text)
    return strArr 
}
// console.log(sortStr())

function getData3(studentName: string,score: string= "pass",grade?: number,...gradesArr: number[]):string{
    gradesArr.sort((a:number,b:number): number => a-b))
    let GPA = gradesArr ? (gradesArr.reduce((previousValue, currentValue) => previousValue + currentValue,0))/gradesArr.length : "grades lost in the system"
    return grade && gradesArr ? `${studentName} ${grade} ${gradesArr} ${score} avg: ${GPA}` : `${studentName} ${score}`
}
console.log(getData3("Batel",5,9,7,2))

function getData4(proudectName: string,proudectColor: string= "black",discountPercentage?: number,...sizesArr: number[]):string{
    sizesArr.sort((a:number,b:number): number => a-b))
    return discountPercentage && sizesArr ?  `${proudectName} ${proudectColor} Sale:${discountPercentage} % ${sizesArr}` : `${proudectName} ${proudectColor}`
}
console.log(getData4("jeans","blue", 50))
