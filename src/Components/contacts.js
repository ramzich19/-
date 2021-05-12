import axios from 'axios'
import Header from './header';
import React, {Component} from "react";
import {Form} from 'react-bootstrap'

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";


export default class Contacts extends Component {


    constructor(props) {
    super(props);
    this.state = {
        name: '',
        description: '',
        email: '',
        phone: '',
        iin: '',
        adres: '',
        child: '',
        place: ''

    };

    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    async getData(){

}
handleSubmit(event)  {

     axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/topback/`,
            data: {
              name: this.state.name,
              email: this.state.email,
              description: this.state.description,
              phone: this.state.phone,
                iin: this.state.iin,
                adres: this.state.adres,
                child: this.state.child,
                place: this.state.place
            },
         headers: {
            "X-CSRFToken": "csrftoken",

         },

        }).then(res => {
                 this.state.data = res.data
                console.log(this.state.data)




    }).catch(function (error) {
        console.log(error);

    });
    event.preventDefault();



}

render() {

  return (

      <main id="main">
        <Header/>

          <div className="breadcrumbs" data-aos="fade-in">
              <div className="container">
                  <h2>Contact Us</h2>
                  <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia
                      voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum
                      praesentium. </p>
              </div>
          </div>

          <section id="contact" className="contact">
              <div data-aos="fade-up">
                  <iframe style={{border:'0', width: '100%' , height: '350px'}}
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                          frameBorder="0" allowFullScreen></iframe>
              </div>



                    <div class="mt-5" data-aos="fade-up">
                    <h4 style={{textAlign: 'center'}}>Для подачи заявки в ассоциацию, заполните поля ниже.</h4>
                    </div>



              <div class="mt-5" data-aos="fade-up" style={{textAlign: '-webkit-center'}}>
<div class="accordion accordion-flush col-md-6 " id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Физическое лицо
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
          <form>
<div class="mb-3 float-right">
  <label for="exampleFormControlInput1" class="form-label">E-mail адрес:</label>
  <input type="text" onChange = {this.onChange} value = {this.state.email} name = "email" class="form-control"  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Полное ФИО:</label>
  <input type="text"  onChange = {this.onChange} value = {this.state.name} name = "name" class="form-control" id="exampleFormControlInput1" placeholder="Иванов Василий Генадьевич"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">ИИН (Индивидуальный идентификационный номер):</label>
  <input type="text" onChange = {this.onChange} value = {this.state.iin} name = "iin" class="form-control" id="exampleFormControlInput1" placeholder="ИИН"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Юридический адрес:</label>
  <input type="text"  onChange = {this.onChange} value = {this.state.adres} name = "adres"  class="form-control" id="exampleFormControlInput1" placeholder="Адрес"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Почтовый индекс:</label>
  <input type="text"  onChange = {this.onChange} value = {this.state.description} name = "description"  class="form-control" id="exampleFormControlInput1" placeholder="Место работы"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Место работы:</label>
  <input type="text"  onChange = {this.onChange} value = {this.state.place} name = "place" class="form-control" id="exampleFormControlInput1" placeholder="Место работы"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Должность:</label>
  <input type="text" onChange = {this.onChange} value = {this.state.child} name = "child"  class="form-control" id="exampleFormControlInput1" placeholder="Должность"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Номер телефона:</label>
  <input type="tel" onChange = {this.onChange} value = {this.state.phone} name = "phone"  class="form-control" id="exampleFormControlInput1" placeholder="Номер телефона"/>
</div>
</form>

<button onClick = {this.handleSubmit} type="button" class="btn btn-primary">Отправить</button>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Юридическое лицо
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">


<form>
            <div class="mb-3 float-right">
  <label for="exampleFormControlInput1" class="form-label">E-mail адрес:</label>
  <input type="text" class="form-control"  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Полное наименование организации (с указанием организационно-правовой формы):
  </label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Название организации"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">БИН/ИИН (Бизнес/индивидуальный идентификационный номер):</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="БИН/ИИН"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Направление деятельности:</label>
  <textarea type="text-area" class="form-control" id="exampleFormControlInput1" placeholder="" rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Юридический адрес</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Адрес"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Почтовый индекс:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Почтовый индекс"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Банковские реквизиты: (номер счета, БИК, наименование банка):</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">ФИО Первого руководителя:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ФИО"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Должность первого руководителя:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Должность"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Номер телефона:</label>
  <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Номер телефона"/>
</div>



<button type="button" class="btn btn-primary">Отправить</button>
</form>
      </div>
    </div>
  </div>
</div>
</div>







          </section>


      </main>

);
}

}
