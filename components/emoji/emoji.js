import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const customReactionEmojis = [
    {
        name: '+1',
        short_names: ['+1'],
        text: '',
        emoticons: [],
        keywords: ['thumbsup'],
    },
    {
        name: 'clap',
        short_names: ['clap'],
        text: '',
        emoticons: [],
        keywords: ['clap'],
    },
    {
        name: 'Heavy Black Heart',
        short_names: ['heart'],
        text: '',
        emoticons: [],
        keywords: ['heart'],
    },
    {
        name: "Face with Tears of Joy",
        short_names: ["joy"],
        text: "",
        emoticons: [],
        keywords: ["joy"],
    },
    {
        name: "Disappointed but Relieved Face",
        short_names: ["disappointed_relieved"],
        text: "",
        emoticons: [],
        keywords: ["disappointed_relieved"],
    },
    {
        name: "Angry Face",
        short_names: ["angry"],
        text: "",
        emoticons: [],
        keywords: ["angry"],
    },
    {
        name: "Unamused Face",
        short_names: ["unamused"],
        text: "",
        emoticons: [],
        keywords: ["unamused"],
    },
    {
        name: "Smiling Face with Sunglasses",
        short_names: ["sunglasses"],
        text: "",
        emoticons: [],
        keywords: ["sunglasses"],
    }
];

const Emoji = () => {
    return (
        <Picker showPreview={false} showSkinTones={false} include={['custom']} custom={customReactionEmojis} />
    );
};

export default Emoji;
