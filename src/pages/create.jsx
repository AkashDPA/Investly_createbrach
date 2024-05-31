import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/create.css'

function Create() {
  return (
    <div>
      <Header />

      <div>

          <div class="createdtop_san">

            <div class="main_create_san">
                <h1 class="createdtag" >Created Funds</h1>
                <h1 class="managedtag"  >Managed by you</h1>
            </div>

            <div class="createbtn1">
                <a class="btncreate" href="">Create Own Fund</a>
            </div>

          </div>

          <div>
          </div>

      </div>

      <Footer />
    </div>
  )
}

export default Create
