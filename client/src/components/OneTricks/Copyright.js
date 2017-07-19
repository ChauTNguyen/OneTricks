// @flow

import React from 'react';

const disclaimer = `
  This product isn't endorsed by Riot Games and doesn't reflect
  the views or opinions of Riot Games or anyone officially involved
  in producing or managing League of Legends. League of Legends and
  Riot Games are trademarks or registered trademarks of Riot Games, Inc.
  League of Legends © Riot Games,Inc. This product is not endorsed, certified
  or otherwise approved in any way by op.gg, and lolking or any of their
  affiliates. All game data is powered by Riot's API.
` + ' '; // eslint-disable-line no-useless-concat

const Copyright = (): React$Element<any> =>
  <div className="copyright">
    {disclaimer}<a href="https://github.com/ChauTNguyen/OneTricks" rel="noopener noreferrer" target="_blank" id="src-code">src code</a>
  </div>;

export default Copyright;
