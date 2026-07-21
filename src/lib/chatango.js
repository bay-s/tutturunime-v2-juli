import  { useEffect, useState } from 'react';

const ChatangoChat = () => {
    const scriptContent = JSON.stringify({
        handle: 'tutturunime-chat',
        arch: 'js',
        styles: {
          a: '000000',
          b: 100,
          c: 'FFFFFF',
          d: 'FFFFFF',
          k: '000000',
          l: '000000',
          m: '000000',
          n: 'FFFFFF',
          p: '10',
          q: '000000',
          r: 100,
          usricon:0.92,
          surl:0,
          cnrs:0.42
        }
      });
      
      const myScript = `
        <script id="cid0020000360702248911" style="width:100%; height: 350px;" data-cfasync="false" async src="https://st.chatango.com/js/gz/emb.js">
          ${scriptContent}
        </script>
      `;
    
      return <div dangerouslySetInnerHTML={{ __html: myScript }} />;
};

export default ChatangoChat;