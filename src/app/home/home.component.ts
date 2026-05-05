import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
  ]
})
export class HomeComponent implements OnInit {

  year: number = 0;
  clients: number = 0;
  project: number = 0;

  slides = [
    { title: " Helping Leaders ", description: " Sustainable Evolvement is the cord that connects your IT needs and our deliverables.", path: '/assets/img/gallery/help_ld.jpg', button_string: "Contact us" },
    { title: " Expert Consultants ", description: "With us, you can Make Machines Much More Magnificent (5M's)", path: '/assets/img/gallery/expert.jpg', button_string: "Contact us" },
    { title: " Growth Partners ", description: "Hire the right resource for your business needs with no compromise on any traits.", path: '/assets/img/gallery/growth.jpg', button_string: "Contact us" }
  ]

  request_cookie = true

  year_completed: number = 6
  satified_clients: number = 15
  project_completed: number = 500
  people_placed: number = 18
  peoplePlaced: number = 0;

  constructor(private renderer: Renderer2) {
    this.request_cookie = !document.cookie.includes('AcceptCookies')
    console.log((document.cookie.includes('AcceptCookies')), this.request_cookie, typeof (this.request_cookie))
  }

  ngOnInit(): void {
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }



  yearcount: any = setInterval(() => {
    this.year++
    if (this.year === this.year_completed) {
      clearInterval(this.yearcount)
    }

  }, 150)

  clientscount: any = setInterval(() => {
    this.clients++
    if (this.clients === this.satified_clients) {
      clearInterval(this.clientscount)
    }
  }, 150)

  projectCount: any = setInterval(() => {
    this.project++
    if (this.project === this.project_completed) {
      clearInterval(this.projectCount)
    }
  }, 10)

  peoplecount: any = setInterval(() => {
    this.peoplePlaced++
    if (this.peoplePlaced === this.peoplecount) {
      clearInterval(this.peoplecount)
    }
  }, 150)

  onAction(type) {
    document.cookie = `AcceptCookies = ${type} ; path=/; max-age=31536000 `
    this.request_cookie = false
  }

  carouselScroll(direction) {
    let cardsContainer = document.getElementById("wrapper");
    const speed = cardsContainer.clientWidth
    if (direction === "left") {
      if (cardsContainer.scrollLeft === 0) cardsContainer.scrollLeft = cardsContainer.scrollWidth - speed
      else cardsContainer.scrollLeft -= speed
    } else {
      if (cardsContainer.scrollLeft === cardsContainer.scrollWidth - speed) cardsContainer.scrollLeft = 0
      else cardsContainer.scrollLeft += speed
    }

  }

}
