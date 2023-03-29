"use strict";(self.webpackChunkjwluiten_github_io=self.webpackChunkjwluiten_github_io||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/12/30/mic-problem-solved","metadata":{"permalink":"/blog/2022/12/30/mic-problem-solved","editUrl":"https://github.com/jwluiten/jwluiten.github.io/tree/main/blog/2022-12-30-mic-problem-solved/index.md","source":"@site/blog/2022-12-30-mic-problem-solved/index.md","title":"Mic problem on macOS solved","description":"On macOS, applications that want to use the microphone need to be granted access. This has been the case for quite a while. Applications that were not granted acces yet, show a dialog to request the user\'s permission. In my case that dialog never showed. So I created a bug report. After a while I received a message that referred to the README.txt that was included in the latest expertSDR3 version (1.0.2 beta).","date":"2022-12-30T00:00:00.000Z","formattedDate":"December 30, 2022","tags":[{"label":"macOS","permalink":"/blog/tags/mac-os"},{"label":"microphone","permalink":"/blog/tags/microphone"},{"label":"expertSDR3","permalink":"/blog/tags/expert-sdr-3"}],"readingTime":0.65,"hasTruncateMarker":false,"authors":[{"name":"Jan Willem Luiten","title":"Website maintainer","url":"https://github.com/jwluiten","imageURL":"https://github.com/jwluiten.png","key":"jwluiten"}],"frontMatter":{"authors":"jwluiten","tags":["macOS","microphone","expertSDR3"]}},"content":"On macOS, applications that want to use the microphone need to be granted access. This has been the case for quite a while. Applications that were not granted acces yet, show a dialog to request the user\'s permission. In my case that dialog never showed. So I created a [bug report](https://github.com/ExpertSDR3/ExpertSDR3-BUG-TRACKER/issues/531). After a while I received a message that referred to the README.txt that was included in the latest expertSDR3 version (1.0.2 beta).\\n\\nLong story short, after copying `expertSDR3` to `Applications`, opening the `terminal` application and executing the following command solved the problem:\\n\\n```bash\\ncodesign --force --deep --sign - /Applications/ExpertSDR3.app\\n```\\n\\nTo verify access was granted open `System Preferences` and click `Privacy & Security`. Next select `Microphone`. If granting access for expertSDR3 succeeded you should see the following:\\n\\n![Microphone Security](microphone-security.png)"}]}')}}]);