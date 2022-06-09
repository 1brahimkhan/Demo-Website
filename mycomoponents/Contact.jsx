import React, {useState} from 'react'

export const Contact = () => {


const [data,setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",

});
 

const InputEvent= (event) =>{
    const {name,value} = event.target;
    setData((preVal) =>{
        return{
            ...preVal,
            [name] : value,
        }
    })
};

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`Thank You for submitting your response\nYour Details Are :\nName: ${data.fullname}\nPhone Number: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.msg}`)
    };
    return (
        <div>
            <h1 className = 'text-center'>Welcome to Contact Page</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"></div>
            <form onSubmit={formSubmit}>
                <div className="my-5"></div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fullname" value={data.fullname}  onChange={InputEvent} placeholder='Ibrahim Khan'/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input required type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.phone} onChange={InputEvent} placeholder='9980XXXXXX'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input requiredtype="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email}  onChange={InputEvent} placeholder='example@gmail.com'/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} placeholder="Crazzy Devs are the pro website developers"></textarea>
</div>
  <button type="submit" className="justify-content-center btn btn-outline-primary btn-sm" on>Submit</button>
</form>
</div>
        </div>
        </div>
    )
}


