import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner-timer',
  templateUrl: './banner-timer.component.html',
  styleUrls: ['./banner-timer.component.scss']
})

export class BannerTimerComponent implements OnInit {
  constructor() {  }

  days: string = "00";
  hours: string = "00";
  minutes: string = "00";
  seconds: string = "00";
  x = null;

  startTimer(startCountDownDate: any) {
    //@ts-ignore
    this.x = setInterval(this.timerFunc(startCountDownDate), 1000)
  }
  timerFunc(startCountDownDate: any) {
    let now = new Date().getTime();
    let distance = startCountDownDate.getTime() - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.setTimer(startCountDownDate, days, hours, minutes, seconds, distance);
  }
  setTimer(countdownDate: any, days: any, hours: any, minutes: any, seconds: any, distance: any) {
    if (distance < 0) {
      //@ts-ignore
      clearInterval(this.x)
      this.days = "0"+days;
      this.hours = "0"+hours;
      this.minutes = "0"+minutes;
      this.seconds = "0"+seconds;
      countdownDate.setHours(0)
      countdownDate.setMinutes(0)
      countdownDate.setSeconds(0)
      //@ts-ignore
      this.x = setInterval(this.timerFunc(startCountDownDate), 3600);
    } else {
      if (days < 10) {
        this.days = "0"+days;
      } else {
        this.days = days;
      }
      if (hours < 10) {
        this.hours = "0"+hours;
      } else {
        this.hours = hours;
      }
      if (minutes < 10) {
        this.minutes = "0"+minutes;
      } else {
        this.minutes = minutes;
      }
      if (seconds < 10) {
        this.seconds = "0"+seconds;
      } else {
        this.seconds = seconds;
      }
    }
  }
  getDayName(dateStr: any, locale: any)
  {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }
  ngOnInit(): void {
    let countDownDate = new Date()
    countDownDate.setHours(0);
    countDownDate.setMinutes(0);
    countDownDate.setSeconds(0);
    let day = this.getDayName(countDownDate, "en");
    console.log("Hour less than 12", countDownDate);
    if (day === "Saturday") {
      if (countDownDate.getHours() < 12) {
        let hoursDiff = 12 - countDownDate.getHours();
        countDownDate.setHours(hoursDiff + countDownDate.getHours());
        countDownDate.setMinutes(0);
        countDownDate.setSeconds(0);
      } else {
        countDownDate.setDate(countDownDate.getDate() + 7);
      }
    } else if (day === "Sunday") {
      countDownDate.setDate(countDownDate.getDate() + 6);
    } else if (day === "Monday") {
      countDownDate.setDate(countDownDate.getDate() + 5);
    } else if (day === "Tuesday") {
      countDownDate.setDate(countDownDate.getDate() + 4);
    } else if (day === "Wednesday") {
      countDownDate.setDate(countDownDate.getDate() + 3);
    } else if (day === "Thursday") {
      countDownDate.setDate(countDownDate.getDate() + 2);
    } else if (day === "Friday") {
      countDownDate.setDate(countDownDate.getDate() + 1);
    } else {
      countDownDate === countDownDate;
    }
    this.startTimer(countDownDate)
  }

}
