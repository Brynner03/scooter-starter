
class Scooter{
  // scooter code here
  static nextSerial = 1
  constructor(station){
    this.station = station
    this.user=null
    this.serial=Scooter.nextSerial
    Scooter.nextSerial++
    this.charge=100
    this.isBroken=false

  }

  rent(user){
    if(this.charge < 20){
      throw new Error('scooter needs to charge')
    }
    if(this.charge > 20 && this.isBroken == true){
      throw new Error('scooter needs repair')
    }
    if(this.isBroken == true){
      throw new Error('scooter needs repair')
    }

    this.station = null
    this.user = user

  }
  dock(station){
    this.station = station
    this.user = null
  }

}


module.exports = Scooter
