
(()=>{
  const openAdminOrders=()=>{
    if(innerWidth<900)return;
    document.querySelectorAll('.sheet.full:has(.adminHead) details.orderDetailed:not(.finishedOrder)').forEach(card=>card.open=true);
  };
  new MutationObserver(openAdminOrders).observe(document.body,{childList:true,subtree:true});
  window.addEventListener('resize',openAdminOrders);
  setTimeout(openAdminOrders,100);
})();
