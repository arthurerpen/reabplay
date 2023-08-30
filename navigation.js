class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>

        </style>

        <header>
            <nav class="nav-extended blue">
            <div class="nav-wrapper">
            <a href="#" data-target="mobile-nav" class="sidenav-trigger hide-on-large-only"><i
                class="material-icons">menu</i></a>
            <a href="index.html" class="brand-logo center">Reab Play</a>
            <!-- Adicione os ícones de Mensagens e Notificações à direita -->
            <ul id="nav-mobile" class="right">
                <li><a href="mensagens.html"><i class="material-icons">message</i></a></li>
                 <li><a href="notificacoes.html"><i class="material-icons">notifications</i></a></li>
             </ul>
            </div>
            
        </nav>
        
        <!-- Sidenav (Mobile) -->
        <ul class="sidenav sidenav-fixed" id="mobile-nav">
            <li>
            <div class="user-view">
                <div class="background bg-image">
                <img src="assets/espaco1.jpg">
                </div>
                <a href="#user"><img class="circle" src="assets/rosto-profissional1.jpg"></a>
                <div>
                <a href="#name"><span class="white-text name">Dr. Pedro</span></a>
                <a href="#email"><span class="white-text email">pedro.fisio@gmail.com</span></a>
                </div>
            </div>
            </li>
            <li><a href="agenda.html">Agenda</a></li>
            <li><a href="#">Pacientes</a></li>
        
            <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
                <li>
                <a class="collapsible-header">Cadastro<i class="material-icons">arrow_drop_down</i></a>
                <div class="collapsible-body">
                    <ul>
                    <li><a href="#!">Tarefas</a></li>
                    <li><a href="#!">Vídeo</a></li>
                    <li><a href="#!">Protocolos</a></li>
                    </ul>
                </div>
                </li>
            </ul>
            </li>
        
        </ul>

        
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);