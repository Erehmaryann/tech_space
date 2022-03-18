import { Picker } from 'emoji-mart';
import { useMemo } from 'react';

import 'emoji-mart/css/emoji-mart.css';

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

const Emojis = ({ selectedEmoji, setSelectedEmoji, total, setTotal }) => {

    const handleEmojiSelect = (emoji) => {
        let isEmojiAlreadyFound = false;
        let emojiObjectWithReactionCount = { ...emoji, reaction_count: 1 };
        setTotal([...total, "like"]);


        let newSelectedEmojis = selectedEmoji.map(emojiObject => {
            if (emojiObject === emoji) {
                isEmojiAlreadyFound = true;
                return { ...emojiObject, reaction_count: emojiObject.reaction_count + 1 };
            }
            if (emojiObject.id === emoji.id) {
                isEmojiAlreadyFound = true;
                return {
                    ...emojiObject,
                    reaction_count: emojiObject.reaction_count + 1,
                };
            }
            return emojiObject;
        });
        if (isEmojiAlreadyFound) {
            setSelectedEmoji(newSelectedEmojis);
        } else {
            setSelectedEmoji([...newSelectedEmojis, emojiObjectWithReactionCount]);
        }
    };

    return (
        <Picker
            total={total}
            onSelect={handleEmojiSelect}
            showPreview={false}
            showSkinTones={false}
            emojiSize={16}
            include={['custom']}
            custom={customReactionEmojis}
        />
    );
};

export default Emojis;
