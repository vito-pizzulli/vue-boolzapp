const { createApp } = Vue;

createApp ({
    data() {
        return {
            contacts: [
                {
                    name: 'Francesco',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    id: 1,
                    messages: [
                        {
                            date: '03/06/2023 15:30:20',
                            message: 'Stasera che facciamo?',
                            status: 'sent'
                        },
                        {
                            date: '03/06/2023 15:35:50',
                            message: 'Andiamo a mangiare una pizza?',
                            status: 'received'
                        },
                        {
                            date: '03/06/2023 15:37:10',
                            message: 'Si ci sta, sperando che non piova 😅',
                            status: 'sent'
                        },
                        {
                            date: '03/06/2023 15:42:07',
                            message: 'Se piove dopo mangiato torniamo a casa e giochiamo alla Playstation! 😎',
                            status: 'received'
                        },
                        {
                            date: '03/06/2023 15:46:46',
                            message: 'Va benissimo 😎',
                            status: 'sent'
                        },
                        {
                            date: '03/06/2023 15:48:00',
                            message: 'Perfetto 👍',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Augusto',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    id: 2,
                    messages: [
                        {
                            date: '02/06/2023 14:02:15',
                            message: 'Stasera vuoi venire a ballare?',
                            status: 'received'
                        },
                        {
                            date: '02/06/2023 14:15:34',
                            message: 'Dove?',
                            status: 'sent'
                        },
                        {
                            date: '02/06/2023 14:19:25',
                            message: 'In un bel locale a Matera 👍',
                            status: 'received'
                        },
                        {
                            date: '02/06/2023 14:23:54',
                            message: 'Si dai, si può fare 👍',
                            status: 'sent'
                        },
                        {
                            date: '02/06/2023 14:30:10',
                            message: 'Va bene, ci vediamo dopo',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    id: 3,
                    messages: [
                        {
                            date: '08/06/2023 18:10:40',
                            message: "Ciao Vito, stasera c'è il Summer Game Fest, ti va di vederlo insieme?",
                            status: 'received'
                        },
                        {
                            date: '08/06/2023 18:11:12',
                            message: "Potrebbero far vedere qualcosa di Final Fantasy 7 Rebirth",
                            status: 'received'
                        },
                        {
                            date: '08/06/2023 18:13:43',
                            message: 'Ciao Fabio, si va benissimo',
                            status: 'sent'
                        },
                        {
                            date: '08/06/2023 18:14:03',
                            message: 'A che ora inizia?',
                            status: 'sent'
                        },
                        {
                            date: '08/06/2023 18:15:15',
                            message: 'Alle 21:00',
                            status: 'received'
                        },
                        {
                            date: '08/06/2023 18:15:57',
                            message: 'A dopo allora!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alberto',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    id: 4,
                    messages: [
                        {
                            date: '31/04/2023 23:35:48',
                            message: 'Cuggi come va? Come stai?',
                            status: 'sent'
                        },
                        {
                            date: '01/05/2023 08:10:20',
                            message: 'Cuggi tutto bene, a te? Quando vieni di nuovo a Roma? 😂',
                            status: 'received'
                        },
                        {
                            date: '01/05/2023 11:32:51',
                            message: 'Tutto bene, comunque torno presto! 😎',
                            status: 'sent'
                        },
                        {
                            date: '01/05/2023 13:02:15',
                            message: 'Ti aspetto presto allora!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Anto',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    id: 5,
                    messages: [
                        {
                            date: '05/06/2023 19:02:55',
                            message: 'Dove sei?',
                            status: 'sent'
                        },
                        {
                            date: '05/06/2023 19:28:03',
                            message: 'A Taranto',
                            status: 'received'
                        },
                        {
                            date: '05/06/2023 19:36:14',
                            message: 'Fai attenzione',
                            status: 'sent'
                        },
                        {
                            date: '05/06/2023 20:02:58',
                            message: 'Si tranquillo',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Mamma',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    id: 6,
                    messages: [
                        {
                            date: '09/06/2023 12:00:51',
                            message: 'A che punto sei? 😘',
                            status: 'received'
                        },
                        {
                            date: '09/06/2023 12:10:24',
                            message: 'Sto tornando',
                            status: 'sent'
                        },
                        {
                            date: '09/06/2023 12:12:10',
                            message: 'Ok 😘',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Papà',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    id: 7,
                    messages: [
                        {
                            date: '25/05/2023 18:57:21',
                            message: 'Siete arrivati?',
                            status: 'sent'
                        },
                        {
                            date: '25/05/2023 18:59:38',
                            message: 'Si proprio adesso',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Rossana',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    id: 8,
                    messages: [
                        {
                            date: '19/05/2023 16:30:16',
                            message: 'Sei libero domenica? Ci riuniamo tutti in campagna',
                            status: 'received'
                        },
                        {
                            date: '19/05/2023 16:42:00',
                            message: 'Si dovrei esserci, ti faccio sapere comunque 😁',
                            status: 'sent'
                        },
                        {
                            date: '19/05/2023 16:58:47',
                            message: 'Va bene 😁',
                            status: 'received'
                        }
                    ],
                }
            ],
            answers: [
                "Non ne ho la più pallida idea.",
                "Dipende dai punti di vista.",
                "Sono d'accordo!",
                "Va bene!",
                "Assolutamente sì!",
                "No, non penso proprio.",
                "Ok!",
                "Sì, ma dipende da come la si guarda.",
                "No, non è così semplice come sembra.",
                "Sì, ma ci sono molti fattori da considerare."
            ],
            activeUser: 0,
            userToSearch: '',
            newMessageSent: '',
            userAnswering: '',
            messageSentAudio: new Audio('audio/messageSent.mp3'),
            messageReceivedAudio: new Audio('audio/messageReceived.mp3'),
            dropdownHidden: true,
            clickedMessageIndex: '',
            deleteConfirmHidden: true
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
                this.messageSentAudio.currentTime = 0;
                this.messageSentAudio.play();
                this.contacts[this.activeUser].messages.push(newMessageAdd);
                this.newMessageSent = ''
                newMessageReceived = setTimeout(() => this.newMessageReceived(), 1000);
                this.userAnswering = this.activeUser;
                this.scrollToBottom();
            }
        },
        newMessageReceived() {
            newMessageReceivedAdd = { date: this.currentDateWithFormat(), message: this.randomAnswer(), status: 'received' };
            this.contacts[this.userAnswering].messages.push(newMessageReceivedAdd);
            if (this.userAnswering === this.activeUser) {
                this.messageReceivedAudio.currentTime = 0;
                this.messageReceivedAudio.play();
            }
            this.scrollToBottom();
        },
        randomAnswer() {
            return this.answers[Math.floor(Math.random() * this.answers.length)];
        },
        showDropdownMenu(index) {
            this.clickedMessage = index;
            this.dropdownHidden = false;
        },
        hideDropdownMenu() {
            this.dropdownHidden = true;
            this.deleteConfirmHidden = true;
        },
        showDeleteConfirm() {
            this.deleteConfirmHidden = false;
        },
        hideDeleteConfirm() {
            this.deleteConfirmHidden = true;
        },
        deleteMessage() {
            this.messageSentAudio.currentTime = 0;
            this.messageSentAudio.play();
            this.contacts[this.activeUser].messages.splice(this.clickedMessage, 1);
            this.dropdownHidden = true;
            this.deleteConfirmHidden = true;
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
        },
        getTimeFromDate(date) {
            time = date.split(" ")[1];
            hourAndMinutes = time.split(":").slice(0,2).join(":");
            return hourAndMinutes;
        },
        getDateOnlyFromDate(date) {
            currentDate = new Date();
            currentDay = currentDate.getDate();
            if (currentDay < 10) {
                currentDay = '0' + currentDay;
            }
            currentMonth = currentDate.getMonth() + 1;
            if (currentMonth < 10) {
                currentMonth = '0' + currentMonth;
            }
            currentYear = currentDate.getFullYear();
            dateOnly = date.split(" ")[0];
            if (`${currentDay}/${currentMonth}/${currentYear}` == dateOnly) {
                dateOnly = 'oggi';
            }
            return dateOnly;
        },
        scrollToBottom() {
            scrollToBottomElement = document.querySelector('div.scroll-to-bottom');
            scrollToBottomElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}) .mount('#app');