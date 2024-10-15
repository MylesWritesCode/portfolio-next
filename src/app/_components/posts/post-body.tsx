import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className='mx-auto max-w-2xl'>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Need to do this */}
      <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
