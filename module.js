import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
      import { set,get,getDatabase,ref } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
      const firebaseConfig = {
        apiKey: "AIzaSyDQxve9EL2hSOdmZh-A7dXmazwi-MbZhVU",
        authDomain: "goldywebzone.firebaseapp.com",
        databaseURL: "https://goldywebzone-default-rtdb.firebaseio.com",
        projectId: "goldywebzone",
        storageBucket: "goldywebzone.appspot.com",
        messagingSenderId: "462971610645",
        appId: "1:462971610645:web:68f7b407853c203901101c"
      };
      const app = initializeApp(firebaseConfig);
      const db=getDatabase(app);

      document.getElementById('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        var form = e.target;
        set(ref(db,'/reviews/'+Date.now()),{
          name:form.name.value,
          email:form.email.value,
          phone:form.phone.value,
          message:form.message.value
        }).then(()=>{
          document.querySelector('.alert').innerHTML=`<i>Thans for feedback...</i>`;
          form.reset();loadReviews();
          setTimeout(()=>{document.querySelector('.alert').innerHTML=''},1100);
        }).catch((err)=>{document.querySelector('.alert').innerHTML=err.toString().replace('FirebaseError: Firebase:','');
        setTimeout(()=>{document.querySelector('.alert').innerHTML=''},1100);})

      })

      function loadReviews(){
        var reviewContainer=document.getElementById('reviewContainer');
        reviewContainer.innerHTML='';
        get(ref(db,'/reviews')).then((data)=>{
          var dataVal=data.val();
          if(dataVal){
            for(var x in dataVal){
              var div = document.createElement('div');
              div.setAttribute('class','Card');
              div.innerHTML=`<b>Name: ${dataVal[x].name}</b><p><u>Feedback:</u>&nbsp;<i> ${dataVal[x].message}</i></p>`;
              document.getElementById('reviewContainer').appendChild(div);
            }
          }
          else{
            document.getElementById('reviewContainer').innerHTML='<i>No feedbacks</i>'
          }
        })
      }
      loadReviews();
