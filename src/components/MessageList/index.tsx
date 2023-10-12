import React, {ReactElement, useRef} from 'react';
import styles from './styles';
import {FlatList, ListRenderItem, View} from 'react-native';
import {ImageChat} from '../../models/Image';
import {Choice} from '../../models/choice';

interface MessageListProps {
  chat: ImageChat[] | Choice[];
  renderMessage: ListRenderItem<Choice & ImageChat>;
}

const MessageList = ({chat, renderMessage}: MessageListProps) => {
  const flatListRef = useRef<FlatList>(null);

  const separator = (): ReactElement => <View style={styles.separator} />;

  return (
    <FlatList
      ref={flatListRef}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      data={chat}
      renderItem={renderMessage}
      ItemSeparatorComponent={separator}
      onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
      keyExtractor={(item, index) => String(index)}
    />
  );
};

export {MessageList};
