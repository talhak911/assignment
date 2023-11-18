// import { Html } from 'next/document'
// import Image from 'next/image';
export default function Home() {
  const bodyStyle = {
    padding:'250px',
    fontWeight:"normalWeight"
  }
  const headings={color: '#159957',fontWeight:'normalWeight'}
  const normalWeight={fontWeight:'Normal'}

  const boxStyle = {
    background: 'linear-gradient(120deg, #155799, #159957)', 
    color: 'white',
    padding: '80px',
    borderRadius: '10px',
    
    
  };

  return (
    <body>
      
   
    <div style={boxStyle}>
      <h1 style={{textAlign: 'center',fontSize:'3.1rem',padding:'3rem  4rem',marginTop: '-40px' }}>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h1>
      <h3 style={{color: '#ffff',textAlign:'center',fontWeight:"normalWeight", marginTop: '-40px'}}>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</h3>
      </div>
      
      <div style={bodyStyle}>
      <h1  style={{color: '#159957',
      fontFamily:'sans-serif',
      fontWeight:"normalWeight",
     marginTop:'-200px'}
      }>
      Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h1>
        <img
        src="/logo.png" 
        alt="Logo Panaverse"
        style={{ display: 'block', margin: 'auto',  maxWidth: '100%' }}
      />
      <h2 style={headings}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</h2>

      <a href="https://www.piaic.org/"><h1> Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar</h1></a>
      
      
      <h3 style={normalWeight}>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.</h3>
      <h3 style={normalWeight}>Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</h3>
      
      <h2 style={headings}><br />The Program in a Nutshell: Earn While You Learn</h2>
      <h3 style={normalWeight}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0EYseoYwt-c?si=R45XkQTByqJFSzZ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <video  controls>
            <source src="/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <table style={{marginTop:'100px'}}>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>

      </div>
<div className="container">
  <h2>Contact Us</h2>
<input type="text"id="fname" name="firstname" placeholder="Your name.." />
<input type="text"id="email" name="email" placeholder="Your Email.." />
<input type="text"id="message" name="message" placeholder="Your message" />
<button className="button">Submit</button>
</div>
      </body>
  );
}

