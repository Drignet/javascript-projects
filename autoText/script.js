const aboutDao = document.querySelector('.about-dao');
const text = `<p>A decentralized autonomous organization is an entity structure in which tokenholders participate in the management and decision-making of an entity.</p>
<p>There is no central authority of a DAO; instead, power is distributed across tokenholders who collectively cast votes.</p>
<p>All votes and activity through the DAO are posted on a blockchain, making all actions of users publicly viewable.</p>
<p>One of the first DAOs named The DAO was an organization created by developers to automate decisions and facilitate cryptocurrency transactions.</p>
<p>A DAO must ensure security is prioritized, as exploits can leave a DAO drained of millions of dollars of its treasury savings.   </p>`;

let end = 1;

setInterval(msg , 100);


function msg(){
    aboutDao.innerHTML = text.slice(0, end);
    end++;
if (end > text.length){
    end = 1;
}

}