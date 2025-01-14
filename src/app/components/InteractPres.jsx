import React, { useEffect } from 'react';
import Container from './Container';

const InteractPres = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'genially-embed-js';
    script.async = true;
    script.src = 'https://view.genially.com/static/embed/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
       <div className="my-20 space-y-4 px-6 md:px-0">
      <h2 className="text-center text-2xl font-bold text-quaternary dark:text-quaternarydark dark:text-tertiaryDark md:text-4xl">
        Прикладові матеріали
      </h2>
    </div>
    <div className={`md:w-[50%] `} >
      <div className="container-wrapper-genially" style={{ position: 'relative', minHeight: '400px', maxWidth: '100%' }}>
        <video
          className="loader-genially"
          autoPlay
          loop
          playsInline
          muted
          style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', marginBottom: '10%' }}
        >
          <source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="667955516971fd00145af967" className="genially-embed" style={{ margin: '0px auto', position: 'relative', height: 'auto', width: '100%' }}></div>
      </div>
    </div>
    </Container>
  );
};

export default InteractPres;
