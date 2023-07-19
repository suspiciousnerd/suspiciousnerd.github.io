---
layout: page
title: About This Blog
permalink: /about
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>Under Construction.</p>




</div>

<div class="col-md-4">

<div class="sticky-top sticky-top-80">

<!-- Coffee Link Replacement Content -->
<h4 style="margin-bottom: 5px;">Questions or Feedback?</h4>
<a href="#" onclick="copyToClipboard('terminaltears@proton.me', this)"><span><i class="fa fa-envelope"></i> <span id="copyText">Contact Me</span></span></a>

<script>
  function copyToClipboard(email, link) {
    navigator.clipboard.writeText(email)
      .then(function() {
        var copyText = link.querySelector('#copyText');
        copyText.textContent = 'Email Copied!';
        setTimeout(function() {
          copyText.textContent = 'Report An Issue';
        }, 3000);
      })
      .catch(function(error) {
        console.error('Failed to copy: ', error);
      });
  }
</script>

<!-- Coffee Link Original
<h5>Buy me a coffee</h5>

<p>Thank you for your support! Your donation helps me to maintain and improve <a target="_blank" href="">Mediumish <i class="fab fa-github"></i></a>.</p>

<a target="_blank" href="https://www.wowthemes.net/donate/" class="btn btn-danger">Buy me a coffee</a> 
-->


</div>
</div>
</div>
