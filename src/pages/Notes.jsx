import Notecard from "../component/ui/Notecard"

import '../styles/layoutstyle/Notes.css'



function Notes() {

  return (
    <div className="Note-container">

      <div>
        <h2>Sinode Notes Libralies</h2>

        <p>
          <strong>Sinodi Libral</strong> inakupa nafasi wewe mwalimu kuweza kutunza/kuhifadhi Notes na Summary zako zote katika Libral ya Sinodi kwa usalama zaidi. pia unaweza kuifikia sinodi Libral kwa mda wowote bila gharama yoyote ile kwa urahisi na uharaka zaidi. 
          <br />
          <strong>Sinodi Libral</strong> Nimoja ya mpango makakati baora zaidi wa kutunza na kuhifadhi Notes na summary za walimu. Sinodi Library inasehemu kuu tatu....
          <ul>
            <li>maktaba ya walimu</li>
            <li>maktaba ya wanafunzi</li>
            <li>maktaba ya Notes za kufundishia kwa walimu</li>
          </ul>
        </p>

      </div>



      <div>
      <h1>hapa ndipo heading inakaa</h1>

      <div>
      <input type="search" name="" id="" placeholder="search" />
      {/* <button>Create Note</button> */}
      <button>Upload Note</button>
      </div>
      <div className="card-container">
        <Notecard />
        <Notecard />
        <Notecard />
        <Notecard />
        <Notecard />
        <Notecard />
      </div>
    </div>

      </div>
  )
}

export default Notes

