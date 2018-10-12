---
id: whisper_faqs
title: Whisper - FAQs
---
# All Your Questions Answered
**Q. Does Whisper store messages on blockchain?**

**A.** No, messages are sent between peers off-chain.

**Q. How Whisper protocol relates to [Whisper Systems](https://en.wikipedia.org/wiki/Whisper_Systems), [Open Whisper Systems](https://en.wikipedia.org/wiki/Open_Whisper_Systems) (Signal) or [Whisper app](https://en.wikipedia.org/wiki/Whisper_(app))?**

**A.** No relation, except the name choice. The word "whisper" seems to be a decent name for any censorship-fighting technology.

**Q. We would ideally do our off-chain communication using something that is already available to us. There is an added bonus if it uses ÐΞVp2p, since we already need that port opened anyways?**

**A.** This is great! The more nodes that run ÐΞVp2p with Whisper enabled, the better the service will be - but there is also a limit to how much traffic the system can handle. It's not meant for high-volume communication, like audio and video. In fact, it's not a pure messaging system, more like an ephemeral DHT where messages "stay in the system" for a while, such that new participants can pick them up for a limited time period.

**Q. The rate at which we do off-chain communication would be in the same order as our on-chain communication (e.g. every ~2 transactions would perhaps require 1 off-chain message). Can Whisper achieve this?**

**A.** It can, but there are other considerations to take into account. It's important to remember that Whisper is an unreliable transport layer and some messages will never reach their intended recipient. Messages stay in the system much like customers in a restaurant: some stay longer, some stay for a shorter time, but if the resturant is full, the owner might decide to more or less politely ask some laggards to leave, for more profitable customers to take their space.

**Q. Off-chain communication should ideally happen directly between the parties involved in a transaction, that is, other network participants should ideally not receive the off-chain communication, even if they are encrypted. Requiring a network topology that allows for this might be an option (e.g. each node needs to have a connection to each other node with which it wants to send off-chain communication to) since our networks probably won't be very large, for now?**

**A.** Whisper is a gossip network - all communications reach all participants, by default. PSS, a cousin of Whisper, allows directing traffic towards certain neighbourhoods or individual nodes, but just like regular traffic goes over multiple routers, so will PSS traffic. Other nodes along the way will see it. Both Whisper and PSS allow control over how anonymous transmissions should be - but in different ways - see [our comparison of the two](whisper_faqs.html) for more.