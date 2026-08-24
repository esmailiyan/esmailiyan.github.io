const header=document.querySelector('.header'),menuButton=document.querySelector('[data-menu-button]'),menu=document.querySelector('[data-menu]');
const compact=()=>header?.classList.toggle('scrolled',scrollY>12);compact();addEventListener('scroll',compact,{passive:true});
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menu.classList.toggle('open',!open)});menu.addEventListener('click',e=>{if(e.target.closest('a')){menuButton.setAttribute('aria-expanded','false');menu.classList.remove('open')}});addEventListener('keydown',e=>{if(e.key==='Escape'){menuButton.setAttribute('aria-expanded','false');menu.classList.remove('open');menuButton.focus()}})}
document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('[data-form-note]');if(!form.checkValidity()){form.reportValidity();return}note.textContent='Thank you. Connect this form to your preferred email service to receive messages.'}));
const programmingTags=document.querySelector('.skill .tags');
if(programmingTags){const bash=document.createElement('span');bash.className='tag';bash.textContent='Bash';programmingTags.append(bash)}
const toolsTags=[...document.querySelectorAll('.skill')].find(group=>group.querySelector('h2')?.textContent.trim()==='Tools')?.querySelector('.tags');
if(toolsTags){['n8n','Uptime Monitoring','Agentic Coding','CI/CD Pipelines'].forEach(name=>{const tag=document.createElement('span');tag.className='tag';tag.textContent=name;toolsTags.append(tag)})}
const balangProject=[...document.querySelectorAll('.project')].find(project=>project.querySelector('h2')?.textContent.trim()==='Balang');
if(balangProject){balangProject.querySelector('h2').textContent='Balang — IELTS Learning Platform';balangProject.querySelector('p').textContent='Co-developed an AI-powered IELTS learning platform with personalized intelligent features, helping learners practise more effectively through adaptive, AI-assisted learning experiences.'}
const dataScienceService=[...document.querySelectorAll('.service')].find(service=>service.querySelector('h3')?.textContent.trim()==='Data Science');
if(dataScienceService){dataScienceService.querySelector('h3').textContent='LLM';dataScienceService.querySelector('p').textContent='Building language-aware applications with large language models and natural language processing.';const icon=dataScienceService.querySelector('svg');icon.setAttribute('viewBox','0 0 24 24');icon.innerHTML='<circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="m8.5 8.5 2.2 6M15.5 8.5l-2.2 6M9 7h6"/>'}
document.querySelectorAll('.nav .btn.small').forEach(button=>button.remove());
const aboutPortrait=document.querySelector('.portrait');
if(aboutPortrait){aboutPortrait.remove();document.querySelector('.about')?.classList.add('about--single')}
const homeVisual=document.querySelector('.visual');
if(homeVisual){homeVisual.innerHTML='<img class="home-profile" src="assets/images/home-profile.jpg" alt="MohamadMahdi Esmailiyan">'}
