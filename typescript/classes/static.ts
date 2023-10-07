class Speaker {
  private _name: string
  static volume = 1

  constructor(name: string) {
    this._name = name
  }

  static volumeDown() {
    this.volume--
  }

  static volumeUp() {
    this.volume++
  }

  showVolume() {
    console.log(`${this._name} 현재 볼륨: ${Speaker.volume}`)
  }
}

let speaker = new Speaker('1번 스피커')
let speaker2 = new Speaker('2번 스피커')
speaker.volume = 10 // speaker 인스턴스의 volume 속성을 새롭게 만들고 10을 부여.
console.log(speaker.volume) // speaker 인스턴스의 volume 출력
// speaker.volumeUp() // 에러

speaker.showVolume()
Speaker.volumeUp()
Speaker.volumeUp()
speaker.showVolume()
speaker2.showVolume()
Speaker.volumeDown()
speaker.showVolume()
speaker2.showVolume()
