const { createApp } = Vue;

createApp ({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    id: 1,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    id: 2,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    id: 3,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    id: 4,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    id: 5,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    id: 6,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    id: 7,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    id: 8,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeUser: 0,
            userToSearch: '',
            newMessageSent: '',
            messageSentAudio: new Audio('audio/messageSent.mp3'),
            messageReceivedAudio: new Audio('audio/messageReceived.mp3'),
            dropDownHidden: true,
            clickedMessageIndex: ''
        }
    },
    methods: {
        activeUserUpdate(contactId) {
            this.activeUser = contactId - 1;
        },
        filterVisibleContacts() {
            return this.contacts.filter(contact => contact.visible);
        },
        userSearch() {
            this.contacts.forEach(contact => 
                contact.visible = false);
            if (this.userToSearch === '') {
                this.contacts.forEach(contact => 
                    contact.visible = true);
            }
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.userToSearch.toLowerCase())) {
                    contact.visible = true;
                }
            })
        },
        sendNewMessage() {
            if ((this.newMessageSent !== '') && (this.newMessageSent.trim().length !== 0)) {
                newMessageAdd = { date: this.currentDateWithFormat(), message: this.newMessageSent, status: 'sent' };
                this.messageSentAudio.play();
                this.contacts[this.activeUser].messages.push(newMessageAdd);
                this.newMessageSent = ''
                newMessageReceived = setTimeout(() => this.newMessageReceived(), 1000);
            }
        },
        newMessageReceived() {
            newMessageReceivedAdd = { date: this.currentDateWithFormat(), message: 'Ok!', status: 'received' };
            this.contacts[this.activeUser].messages.push(newMessageReceivedAdd);
            this.messageReceivedAudio.play();
        },
        showDropdownMenu(index) {
            this.clickedMessage = index;
            this.dropDownHidden = false;
        },
        hideDropdownMenu() {
            this.dropDownHidden = true;
        },
        currentDateWithFormat() {
            date = new Date();
            day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }
            month = date.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }
            year = date.getFullYear();
            hour = date.getHours();
            if (hour < 10) {
                hour = '0' + hour;
            }
            minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            seconds = date.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
        }
    }
}) .mount('#app');