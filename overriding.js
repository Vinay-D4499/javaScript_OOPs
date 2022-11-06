class bank 
{
    roi()
     {
        return 0
    }
}
class AXIS extends bank 
{
    roi() 
    {
        return 10.5
    }
}
class SBI extends bank
 {
    roi() 
    {
        return 12.5
    }
}
sbiObj = new SBI();
console.log(sbiObj.roi())
axisObj = new AXIS()
console.log(axisObj.roi())