import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockAttributesObject: any;
  BlockAttributesArray: any;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /**
   * An object of the BlockEditorPreview Type. 
   * @deprecated 
   */
  blockEditorPreview?: Maybe<BlockEditorPreview>;
  /**
   * A BlockEditorPreview object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  blockEditorPreviewBy?: Maybe<BlockEditorPreview>;
  /**
   * An object of the CaseStudy Type. 
   * @deprecated 
   */
  caseStudy?: Maybe<CaseStudy>;
  /**
   * A CaseStudy object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  caseStudyBy?: Maybe<CaseStudy>;
  /**
   * An object of the Event Type. 
   * @deprecated 
   */
  event?: Maybe<Event>;
  /**
   * A Event object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  eventBy?: Maybe<Event>;
  /**
   * An object of the Inspiration Type. 
   * @deprecated 
   */
  inspiration?: Maybe<Inspiration>;
  /**
   * A Inspiration object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  inspirationBy?: Maybe<Inspiration>;
  /**
   * An object of the ReusableBlock Type. 
   * @deprecated 
   */
  reusableBlock?: Maybe<ReusableBlock>;
  /**
   * A ReusableBlock object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  reusableBlockBy?: Maybe<ReusableBlock>;
  /**
   * An object of the Review Type. 
   * @deprecated 
   */
  review?: Maybe<Review>;
  /**
   * A Review object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  reviewBy?: Maybe<Review>;
  /**
   * A 0bject
   * @deprecated 
   */
  series?: Maybe<Series>;
  /**
   * Connection between the RootQuery type and the Series type
   * @deprecated 
   */
  serieses?: Maybe<RootQueryToSeriesConnection>;
  /**
   * Entry point to get all settings for the site
   * @deprecated 
   */
  allSettings?: Maybe<Settings>;
  /**
   * Connection between the RootQuery type and the BlockEditorContentNode type
   * @deprecated 
   */
  blockEditorContentNodes?: Maybe<BlockEditorContentNodeConnection>;
  /**
   * Connection between the RootQuery type and the BlockEditorPreview type
   * @deprecated 
   */
  blockEditorPreviews?: Maybe<RootQueryToBlockEditorPreviewConnection>;
  /**
   * Connection between the RootQuery type and the CaseStudy type
   * @deprecated 
   */
  caseStudies?: Maybe<RootQueryToCaseStudyConnection>;
  /**
   * Connection between the RootQuery type and the category type
   * @deprecated 
   */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  category?: Maybe<Category>;
  /**
   * Returns a Comment
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * Connection between the RootQuery type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<RootQueryToCommentConnection>;
  /**
   * A node used to manage content
   * @deprecated 
   */
  contentNode?: Maybe<ContentNode>;
  /**
   * Connection between the RootQuery type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  /**
   * Fetch a Content Type node by unique Identifier
   * @deprecated 
   */
  contentType?: Maybe<ContentType>;
  /**
   * Connection between the RootQuery type and the ContentType type
   * @deprecated 
   */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>;
  /**
   * Connection between the RootQuery type and the Event type
   * @deprecated 
   */
  events?: Maybe<RootQueryToEventConnection>;
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>;
  /**
   * Connection between the RootQuery type and the Inspiration type
   * @deprecated 
   */
  inspirations?: Maybe<RootQueryToInspirationConnection>;
  /**
   * An object of the mediaItem Type. 
   * @deprecated 
   */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>;
  /**
   * Connection between the RootQuery type and the mediaItem type
   * @deprecated 
   */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /**
   * A WordPress navigation menu
   * @deprecated 
   */
  menu?: Maybe<Menu>;
  /**
   * A WordPress navigation menu item
   * @deprecated 
   */
  menuItem?: Maybe<MenuItem>;
  /**
   * Connection between the RootQuery type and the MenuItem type
   * @deprecated 
   */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /**
   * Connection between the RootQuery type and the Menu type
   * @deprecated 
   */
  menus?: Maybe<RootQueryToMenuConnection>;
  /**
   * Fetches an object given its ID
   * @deprecated 
   */
  node?: Maybe<Node>;
  /** @deprecated  */
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  /**
   * An object of the page Type. 
   * @deprecated 
   */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>;
  /**
   * Connection between the RootQuery type and the page type
   * @deprecated 
   */
  pages?: Maybe<RootQueryToPageConnection>;
  /**
   * A WordPress plugin
   * @deprecated 
   */
  plugin?: Maybe<Plugin>;
  /**
   * Connection between the RootQuery type and the Plugin type
   * @deprecated 
   */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /**
   * An object of the post Type. 
   * @deprecated 
   */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>;
  /**
   * A 0bject
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
  /**
   * Connection between the RootQuery type and the postFormat type
   * @deprecated 
   */
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  /**
   * Connection between the RootQuery type and the post type
   * @deprecated 
   */
  posts?: Maybe<RootQueryToPostConnection>;
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>;
  /**
   * Connection between the RootQuery type and the EnqueuedScript type
   * @deprecated 
   */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  /**
   * Connection between the RootQuery type and the EnqueuedStylesheet type
   * @deprecated 
   */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /**
   * Connection between the RootQuery type and the ReusableBlock type
   * @deprecated 
   */
  reusableBlocks?: Maybe<RootQueryToReusableBlockConnection>;
  /**
   * Connection between the RootQuery type and the Review type
   * @deprecated 
   */
  reviews?: Maybe<RootQueryToReviewConnection>;
  /**
   * Connection between the RootQuery type and the ContentRevisionUnion type
   * @deprecated 
   */
  revisions?: Maybe<RootQueryToContentRevisionUnionConnection>;
  /**
   * Returns seo site data
   * @deprecated 
   */
  seo?: Maybe<SeoConfig>;
  /**
   * A 0bject
   * @deprecated 
   */
  tag?: Maybe<Tag>;
  /**
   * Connection between the RootQuery type and the tag type
   * @deprecated 
   */
  tags?: Maybe<RootQueryToTagConnection>;
  /**
   * Connection between the RootQuery type and the Taxonomy type
   * @deprecated 
   */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  /**
   * Fetch a Taxonomy node by unique Identifier
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * A node in a taxonomy used to group and relate content nodes
   * @deprecated 
   */
  termNode?: Maybe<TermNode>;
  /**
   * Connection between the RootQuery type and the TermNode type
   * @deprecated 
   */
  terms?: Maybe<RootQueryToTermNodeConnection>;
  /**
   * A Theme object
   * @deprecated 
   */
  theme?: Maybe<Theme>;
  /**
   * Connection between the RootQuery type and the Theme type
   * @deprecated 
   */
  themes?: Maybe<RootQueryToThemeConnection>;
  /**
   * Returns a user
   * @deprecated 
   */
  user?: Maybe<User>;
  /**
   * Returns a user role
   * @deprecated 
   */
  userRole?: Maybe<UserRole>;
  /**
   * Connection between the RootQuery type and the UserRole type
   * @deprecated 
   */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /**
   * Connection between the RootQuery type and the User type
   * @deprecated 
   */
  users?: Maybe<RootQueryToUserConnection>;
  /**
   * Returns the current user
   * @deprecated 
   */
  viewer?: Maybe<User>;
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>;
};


/** The root entry point into the Graph */
export type RootQueryBlockEditorPreviewArgs = {
  id: Scalars['ID'];
  idType?: Maybe<BlockEditorPreviewIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryBlockEditorPreviewByArgs = {
  id?: Maybe<Scalars['ID']>;
  blockEditorPreviewId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryCaseStudyArgs = {
  id: Scalars['ID'];
  idType?: Maybe<CaseStudyIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryCaseStudyByArgs = {
  id?: Maybe<Scalars['ID']>;
  caseStudyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryEventArgs = {
  id: Scalars['ID'];
  idType?: Maybe<EventIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryEventByArgs = {
  id?: Maybe<Scalars['ID']>;
  eventId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryInspirationArgs = {
  id: Scalars['ID'];
  idType?: Maybe<InspirationIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryInspirationByArgs = {
  id?: Maybe<Scalars['ID']>;
  inspirationId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryReusableBlockArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ReusableBlockIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryReusableBlockByArgs = {
  id?: Maybe<Scalars['ID']>;
  reusableBlockId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryReviewArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ReviewIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryReviewByArgs = {
  id?: Maybe<Scalars['ID']>;
  reviewId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQuerySeriesArgs = {
  id: Scalars['ID'];
  idType?: Maybe<SeriesIdType>;
};


/** The root entry point into the Graph */
export type RootQuerySeriesesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToSeriesConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryBlockEditorContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BlockEditorContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryBlockEditorPreviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToBlockEditorPreviewConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCaseStudiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCaseStudyConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: Maybe<CategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ContentNodeIdTypeEnum>;
  contentType?: Maybe<ContentTypeEnum>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToEventConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryInspirationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToInspirationConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MediaItemIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: Maybe<Scalars['ID']>;
  mediaItemId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PageIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PostIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PostFormatIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryReusableBlocksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToReusableBlockConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToReviewConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TermNodeIdTypeEnum>;
  taxonomy?: Maybe<TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType?: Maybe<UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToUserConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum BlockEditorPreviewIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** The BlockEditorPreview type */
export type BlockEditorPreview = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & {
  __typename?: 'BlockEditorPreview';
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  blockEditorPreviewId: Scalars['Int'];
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated 
   */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated 
   */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated 
   */
  authorId?: Maybe<Scalars['ID']>;
  /** @deprecated  */
  blocks?: Maybe<Array<Block>>;
  /** @deprecated  */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the wgg_preview object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** @deprecated  */
  lastUpdateTime?: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Connection between the BlockEditorPreview type and the BlockEditorPreview type
   * @deprecated 
   */
  preview?: Maybe<BlockEditorPreviewToPreviewConnectionEdge>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** @deprecated  */
  previewed?: Maybe<BlockEditorContentNode>;
  /** @deprecated  */
  previewedDatabaseId?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  previewedParentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The Yoast SEO data of the BlockEditorPreview
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The BlockEditorPreview type */
export type BlockEditorPreviewContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The BlockEditorPreview type */
export type BlockEditorPreviewEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type BlockEditorPreviewEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type BlockEditorPreviewTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Nodes used to manage content */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn't exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** URI path for the resource */
  uri: Scalars['String'];
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** An Post Type object */
export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  /**
   * Whether this content type should can be exported.
   * @deprecated 
   */
  canExport?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the ContentType type and the Taxonomy type
   * @deprecated 
   */
  connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
  /**
   * Connection between the ContentType type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
  /**
   * Whether content of this type should be deleted when the author of it is deleted from the system.
   * @deprecated 
   */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /**
   * Description of the content type.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Whether to exclude nodes of this content type from front end search results.
   * @deprecated 
   */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /**
   * The plural name of the content type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /**
   * The singular name of the content type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /**
   * Whether this content type should have archives. Content archives are generated by type and by date.
   * @deprecated 
   */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the content type is hierarchical, for example pages.
   * @deprecated 
   */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier of the post-type object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether this page is set to the static front page.
   * @deprecated 
   */
  isFrontPage: Scalars['Boolean'];
  /**
   * Whether this page is set to the blog posts page.
   * @deprecated 
   */
  isPostsPage: Scalars['Boolean'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the content type.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Details about the content type labels.
   * @deprecated 
   */
  labels?: Maybe<PostTypeLabelDetails>;
  /**
   * The name of the icon file to display as a menu icon.
   * @deprecated 
   */
  menuIcon?: Maybe<Scalars['String']>;
  /**
   * The position of this post type in the menu. Only applies if show_in_menu is true.
   * @deprecated 
   */
  menuPosition?: Maybe<Scalars['Int']>;
  /**
   * The internal name of the post type. This should not be used for display purposes.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention.
   * @deprecated 
   */
  public?: Maybe<Scalars['Boolean']>;
  /**
   * Whether queries can be performed on the front end for the content type as part of parse_request().
   * @deprecated 
   */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to display in REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  restBase?: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated 
   */
  restControllerClass?: Maybe<Scalars['String']>;
  /**
   * Makes this content type available via the admin bar.
   * @deprecated 
   */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the content type to the GraphQL Schema.
   * @deprecated 
   */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that.
   * @deprecated 
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /**
   * Makes this content type available for selection in navigation menus.
   * @deprecated 
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  showInRest?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing this content type in the admin.
   * @deprecated 
   */
  showUi?: Maybe<Scalars['Boolean']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = {
  __typename?: 'ContentTypeToTaxonomyConnection';
  /**
   * Edges for the ContentTypeToTaxonomyConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /**
   * List of Content Types associated with the Taxonomy
   * @deprecated 
   */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  /**
   * Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is hierarchical
   * @deprecated 
   */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier of the taxonomy object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Name of the taxonomy shown in the menu. Usually plural.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is publicly queryable
   * @deprecated 
   */
  public?: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  restBase?: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated 
   */
  restControllerClass?: Maybe<Scalars['String']>;
  /**
   * Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
   * @deprecated 
   */
  showCloud?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to display a column for the taxonomy on its post type listing screens.
   * @deprecated 
   */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated 
   */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the admin menu
   * @deprecated 
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the taxonomy is available for selection in navigation menus.
   * @deprecated 
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the quick/bulk edit panel.
   * @deprecated 
   */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  showInRest?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing terms in this taxonomy in the admin
   * @deprecated 
   */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = {
  __typename?: 'TaxonomyToContentTypeConnection';
  /**
   * Edges for the TaxonomyToContentTypeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Information about pagination in a connection. */
export type WpPageInfo = {
  __typename?: 'WPPageInfo';
  /**
   * When paginating forwards, the cursor to continue.
   * @deprecated 
   */
  endCursor?: Maybe<Scalars['String']>;
  /**
   * When paginating forwards, are there more items?
   * @deprecated 
   */
  hasNextPage: Scalars['Boolean'];
  /**
   * When paginating backwards, are there more items?
   * @deprecated 
   */
  hasPreviousPage: Scalars['Boolean'];
  /**
   * Get information about the offset pagination state in the current connection
   * @deprecated 
   */
  offsetPagination?: Maybe<OffsetPaginationPageInfo>;
  /**
   * When paginating backwards, the cursor to continue.
   * @deprecated 
   */
  startCursor?: Maybe<Scalars['String']>;
};

/** Get information about the offset pagination state */
export type OffsetPaginationPageInfo = {
  __typename?: 'OffsetPaginationPageInfo';
  /**
   * True if there is one or more nodes available in this connection. Eg. you can increase the offset at least by one.
   * @deprecated 
   */
  hasMore?: Maybe<Scalars['Boolean']>;
  /**
   * True when offset can be decresed eg. offset is 0&lt;
   * @deprecated 
   */
  hasPrevious?: Maybe<Scalars['Boolean']>;
  /**
   * Total amount of nodes in this connection
   * @deprecated 
   */
  total?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: Maybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: Maybe<DateInput>;
  /** Column to query against */
  column?: Maybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageHeic = 'IMAGE_HEIC',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageSvgXml = 'IMAGE_SVG_XML',
  ImageTiff = 'IMAGE_TIFF',
  ImageWebp = 'IMAGE_WEBP',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** The cardinality of the connection order */
export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = {
  __typename?: 'ContentTypeToContentNodeConnection';
  /**
   * Edges for the ContentTypeToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /**
   * Default is ‘Add New’ for both hierarchical and non-hierarchical types.
   * @deprecated 
   */
  addNew?: Maybe<Scalars['String']>;
  /**
   * Label for adding a new singular item.
   * @deprecated 
   */
  addNewItem?: Maybe<Scalars['String']>;
  /**
   * Label to signify all items in a submenu link.
   * @deprecated 
   */
  allItems?: Maybe<Scalars['String']>;
  /**
   * Label for archives in nav menus
   * @deprecated 
   */
  archives?: Maybe<Scalars['String']>;
  /**
   * Label for the attributes meta box.
   * @deprecated 
   */
  attributes?: Maybe<Scalars['String']>;
  /**
   * Label for editing a singular item.
   * @deprecated 
   */
  editItem?: Maybe<Scalars['String']>;
  /**
   * Label for the Featured Image meta box title.
   * @deprecated 
   */
  featuredImage?: Maybe<Scalars['String']>;
  /**
   * Label for the table views hidden heading.
   * @deprecated 
   */
  filterItemsList?: Maybe<Scalars['String']>;
  /**
   * Label for the media frame button.
   * @deprecated 
   */
  insertIntoItem?: Maybe<Scalars['String']>;
  /**
   * Label for the table hidden heading.
   * @deprecated 
   */
  itemsList?: Maybe<Scalars['String']>;
  /**
   * Label for the table pagination hidden heading.
   * @deprecated 
   */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /**
   * Label for the menu name.
   * @deprecated 
   */
  menuName?: Maybe<Scalars['String']>;
  /**
   * General name for the post type, usually plural.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Label for the new item page title.
   * @deprecated 
   */
  newItem?: Maybe<Scalars['String']>;
  /**
   * Label used when no items are found.
   * @deprecated 
   */
  notFound?: Maybe<Scalars['String']>;
  /**
   * Label used when no items are in the trash.
   * @deprecated 
   */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /**
   * Label used to prefix parents of hierarchical items.
   * @deprecated 
   */
  parentItemColon?: Maybe<Scalars['String']>;
  /**
   * Label for removing the featured image.
   * @deprecated 
   */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Label for searching plural items.
   * @deprecated 
   */
  searchItems?: Maybe<Scalars['String']>;
  /**
   * Label for setting the featured image.
   * @deprecated 
   */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Name for one object of this post type.
   * @deprecated 
   */
  singularName?: Maybe<Scalars['String']>;
  /**
   * Label for the media frame filter.
   * @deprecated 
   */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /**
   * Label in the media frame for using a featured image.
   * @deprecated 
   */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Label for viewing a singular item.
   * @deprecated 
   */
  viewItem?: Maybe<Scalars['String']>;
  /**
   * Label for viewing post type archives.
   * @deprecated 
   */
  viewItems?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  /**
   * The timestamp for when the node was last edited
   * @deprecated 
   */
  lockTimestamp?: Maybe<Scalars['String']>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** A User object */
export type User = Node & UniformResourceIdentifiable & Commenter & DatabaseIdentifier & {
  __typename?: 'User';
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   * @deprecated 
   */
  avatar?: Maybe<Avatar>;
  /**
   * Connection between the User type and the BlockEditorPreview type
   * @deprecated 
   */
  blockEditorPreviews?: Maybe<UserToBlockEditorPreviewConnection>;
  /**
   * User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
   * @deprecated 
   */
  capKey?: Maybe<Scalars['String']>;
  /**
   * A list of capabilities (permissions) granted to the user
   * @deprecated 
   */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the User type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<UserToCommentConnection>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Description of the user.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
  /**
   * Connection between the User type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
  /**
   * A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps.
   * @deprecated 
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   * @deprecated 
   */
  firstName?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the JWT User secret has been revoked. If the secret has been revoked, auth tokens will not be issued until an admin, or user with proper capabilities re-issues a secret for the user.
   * @deprecated 
   */
  isJwtAuthSecretRevoked: Scalars['Boolean'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The expiration for the JWT Token for the user. If not set custom for the user, it will use the default sitewide expiration setting
   * @deprecated 
   */
  jwtAuthExpiration?: Maybe<Scalars['String']>;
  /**
   * A JWT token that can be used in future requests for authentication/authorization
   * @deprecated 
   */
  jwtAuthToken?: Maybe<Scalars['String']>;
  /**
   * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
   * @deprecated 
   */
  jwtRefreshToken?: Maybe<Scalars['String']>;
  /**
   * A unique secret tied to the users JWT token that can be revoked or refreshed. Revoking the secret prevents JWT tokens from being issued to the user. Refreshing the token invalidates previously issued tokens, but allows new tokens to be issued.
   * @deprecated 
   */
  jwtUserSecret?: Maybe<Scalars['String']>;
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   * @deprecated 
   */
  lastName?: Maybe<Scalars['String']>;
  /**
   * The preferred language locale set for the user. Value derived from get_user_locale().
   * @deprecated 
   */
  locale?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the mediaItem type
   * @deprecated 
   */
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated 
   */
  nicename?: Maybe<Scalars['String']>;
  /**
   * Nickname of the user.
   * @deprecated 
   */
  nickname?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the page type
   * @deprecated 
   */
  pages?: Maybe<UserToPageConnection>;
  /**
   * Connection between the User type and the post type
   * @deprecated 
   */
  posts?: Maybe<UserToPostConnection>;
  /**
   * The date the user registered or was created. The field follows a full ISO8601 date string format.
   * @deprecated 
   */
  registeredDate?: Maybe<Scalars['String']>;
  /**
   * Connection between the User and Revisions authored by the user
   * @deprecated 
   */
  revisions?: Maybe<UserToContentRevisionUnionConnection>;
  /**
   * Connection between the User type and the UserRole type
   * @deprecated 
   */
  roles?: Maybe<UserToUserRoleConnection>;
  /**
   * The Yoast SEO data of a user
   * @deprecated 
   */
  seo?: Maybe<SeoUser>;
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
  /**
   * A website url that is associated with the user.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  userId?: Maybe<Scalars['Int']>;
  /**
   * Username for the user. This field is equivalent to WP_User-&gt;user_login.
   * @deprecated 
   */
  username?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<AvatarRatingEnum>;
};


/** A User object */
export type UserBlockEditorPreviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToBlockEditorPreviewConnectionWhereArgs>;
};


/** A User object */
export type UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToCommentConnectionWhereArgs>;
};


/** A User object */
export type UserEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type UserPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPageConnectionWhereArgs>;
};


/** A User object */
export type UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPostConnectionWhereArgs>;
};


/** A User object */
export type UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
};


/** A User object */
export type UserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** The author of a comment */
export type Commenter = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   * @deprecated 
   */
  default?: Maybe<Scalars['String']>;
  /**
   * HTML attributes to insert in the IMG element. Is not sanitized.
   * @deprecated 
   */
  extraAttr?: Maybe<Scalars['String']>;
  /**
   * Whether to always show the default image, never the Gravatar.
   * @deprecated 
   */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the avatar was successfully found.
   * @deprecated 
   */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /**
   * Height of the avatar image.
   * @deprecated 
   */
  height?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   * @deprecated 
   */
  rating?: Maybe<Scalars['String']>;
  /**
   * Type of url scheme to use. Typically HTTP vs. HTTPS.
   * @deprecated 
   */
  scheme?: Maybe<Scalars['String']>;
  /**
   * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
   * @deprecated 
   */
  size?: Maybe<Scalars['Int']>;
  /**
   * URL for the gravatar image source.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
  /**
   * Width of the avatar image.
   * @deprecated 
   */
  width?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the UserToBlockEditorPreviewConnection connection */
export type UserToBlockEditorPreviewConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the BlockEditorPreview type */
export type UserToBlockEditorPreviewConnection = {
  __typename?: 'UserToBlockEditorPreviewConnection';
  /**
   * Edges for the UserToBlockEditorPreviewConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToBlockEditorPreviewConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<BlockEditorPreview>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToBlockEditorPreviewConnectionEdge = {
  __typename?: 'UserToBlockEditorPreviewConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<BlockEditorPreview>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Case = 'CASE',
  /** The Type of Content object */
  Event = 'EVENT',
  /** The Type of Content object */
  Inspiration = 'INSPIRATION',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  Review = 'REVIEW'
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = {
  __typename?: 'UserToCommentConnection';
  /**
   * Edges for the UserToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
  __typename?: 'UserToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** A Comment object */
export type Comment = Node & DatabaseIdentifier & {
  __typename?: 'Comment';
  /**
   * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL.
   * @deprecated 
   */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated 
   */
  approved?: Maybe<Scalars['Boolean']>;
  /**
   * The author of the comment
   * @deprecated 
   */
  author?: Maybe<CommentToCommenterConnectionEdge>;
  /**
   * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL.
   * @deprecated 
   */
  authorIp?: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  commentId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Comment type and the ContentNode type
   * @deprecated 
   */
  commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
  /**
   * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * The unique identifier stored in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the comment object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL.
   * @deprecated 
   */
  karma?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated 
   */
  parent?: Maybe<CommentToParentCommentConnectionEdge>;
  /**
   * The database id of the parent comment node or null if it is the root comment
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent comment node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated 
   */
  replies?: Maybe<CommentToCommentConnection>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
   * @deprecated 
   */
  type?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type CommentContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A Comment object */
export type CommentParentArgs = {
  where?: Maybe<CommentToParentCommentConnectionWhereArgs>;
};


/** A Comment object */
export type CommentRepliesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CommentToCommentConnectionWhereArgs>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = {
  __typename?: 'CommentToCommenterConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Commenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = {
  __typename?: 'CommentToContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED'
}

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = {
  __typename?: 'CommentToParentCommentConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
  __typename?: 'CommentToCommentConnection';
  /**
   * Edges for the CommentToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
  __typename?: 'CommentToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = {
  __typename?: 'UserToEnqueuedScriptConnection';
  /**
   * Edges for the UserToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedScript';
  /**
   * @todo
   * @deprecated 
   */
  args?: Maybe<Scalars['Boolean']>;
  /**
   * Dependencies needed to use this asset
   * @deprecated 
   */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated 
   */
  extra?: Maybe<Scalars['String']>;
  /**
   * The handle of the enqueued asset
   * @deprecated 
   */
  handle?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The source of the asset
   * @deprecated 
   */
  src?: Maybe<Scalars['String']>;
  /**
   * The version of the enqueued asset
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  /**
   * Edges for the UserToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedStylesheet';
  /**
   * @todo
   * @deprecated 
   */
  args?: Maybe<Scalars['Boolean']>;
  /**
   * Dependencies needed to use this asset
   * @deprecated 
   */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated 
   */
  extra?: Maybe<Scalars['String']>;
  /**
   * The handle of the enqueued asset
   * @deprecated 
   */
  handle?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The source of the asset
   * @deprecated 
   */
  src?: Maybe<Scalars['String']>;
  /**
   * The version of the enqueued asset
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = {
  __typename?: 'UserToMediaItemConnection';
  /**
   * Edges for the UserToMediaItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
  __typename?: 'UserToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** The mediaItem type */
export type MediaItem = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithAuthor & NodeWithComments & HierarchicalContentNode & {
  __typename?: 'MediaItem';
  /**
   * Alternative text to display when resource is not displayed
   * @deprecated 
   */
  altText?: Maybe<Scalars['String']>;
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated 
   */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated 
   */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated 
   */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * The caption for the resource
   * @deprecated 
   */
  caption?: Maybe<Scalars['String']>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the mediaItem type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<MediaItemToCommentConnection>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Description of the image (stored as post_content)
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The filesize in bytes of the resource
   * @deprecated 
   */
  fileSize?: Maybe<Scalars['Int']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the attachment object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Details about the mediaItem
   * @deprecated 
   */
  mediaDetails?: Maybe<MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int'];
  /**
   * Url of the mediaItem
   * @deprecated 
   */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /**
   * Type of resource
   * @deprecated 
   */
  mediaType?: Maybe<Scalars['String']>;
  /**
   * The mime type of the mediaItem
   * @deprecated 
   */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The Yoast SEO data of the mediaItem
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The sizes attribute value for an image.
   * @deprecated 
   */
  sizes?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Url of the mediaItem
   * @deprecated 
   */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths.
   * @deprecated 
   */
  srcSet?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};


/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /**
   * Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /**
   * Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the mediaItem type and the Comment type */
export type MediaItemToCommentConnection = {
  __typename?: 'MediaItemToCommentConnection';
  /**
   * Edges for the MediaItemToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
  __typename?: 'MediaItemToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /**
   * Edges for the ContentNodeToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /**
   * Edges for the ContentNodeToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the featured_lg size */
  FeaturedLg = 'FEATURED_LG',
  /** MediaItem with the featured_md size */
  FeaturedMd = 'FEATURED_MD',
  /** MediaItem with the featured_sm size */
  FeaturedSm = 'FEATURED_SM',
  /** MediaItem with the featured_xl size */
  FeaturedXl = 'FEATURED_XL',
  /** MediaItem with the featured_xs size */
  FeaturedXs = 'FEATURED_XS',
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the ratio size */
  Ratio = 'RATIO',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /**
   * The height of the mediaItem
   * @deprecated 
   */
  file?: Maybe<Scalars['String']>;
  /**
   * The height of the mediaItem
   * @deprecated 
   */
  height?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  meta?: Maybe<MediaItemMeta>;
  /**
   * The available sizes of the mediaItem
   * @deprecated 
   */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /**
   * The width of the mediaItem
   * @deprecated 
   */
  width?: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** @deprecated  */
  aperture?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  camera?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  copyright?: Maybe<Scalars['String']>;
  /** @deprecated  */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  credit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focalLength?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  iso?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  orientation?: Maybe<Scalars['String']>;
  /** @deprecated  */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /**
   * The file of the for the referenced size
   * @deprecated 
   */
  file?: Maybe<Scalars['String']>;
  /**
   * The filesize of the resource
   * @deprecated 
   */
  fileSize?: Maybe<Scalars['Int']>;
  /**
   * The height of the for the referenced size
   * @deprecated 
   */
  height?: Maybe<Scalars['String']>;
  /**
   * The mime type of the resource
   * @deprecated 
   */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The referenced size name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url of the for the referenced size
   * @deprecated 
   */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The width of the for the referenced size
   * @deprecated 
   */
  width?: Maybe<Scalars['String']>;
};

export type Seo = {
  __typename?: 'SEO';
  /** @deprecated  */
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  /** @deprecated  */
  canonical?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focuskw?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaDesc?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaKeywords?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphAuthor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphImage?: Maybe<MediaItem>;
  /** @deprecated  */
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphPublisher?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphSiteName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphTitle?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitterDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitterImage?: Maybe<MediaItem>;
  /** @deprecated  */
  twitterTitle?: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs';
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = {
  __typename?: 'UserToPageConnection';
  /**
   * Edges for the UserToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = {
  __typename?: 'UserToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** The page type */
export type Page = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithComments & NodeWithRevisions & NodeWithPageAttributes & HierarchicalContentNode & MenuItemLinkable & BlockEditorContentNode & {
  __typename?: 'Page';
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated 
   */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated 
   */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated 
   */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  blocks?: Maybe<Array<Block>>;
  /**
   * Gutenberg blocks as json string
   * @deprecated 
   */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the page type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<PageToCommentConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the page object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether this page is set to the static front page.
   * @deprecated 
   */
  isFrontPage: Scalars['Boolean'];
  /**
   * Whether this page is set to the blog posts page.
   * @deprecated 
   */
  isPostsPage: Scalars['Boolean'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * True if the node is a revision of another node
   * @deprecated 
   */
  isRevision?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int'];
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the page type and the page type
   * @deprecated 
   */
  preview?: Maybe<PageToPreviewConnectionEdge>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocks?: Maybe<Array<Block>>;
  /**
   * Previewed Gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
   * @deprecated 
   */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /**
   * Connection between the page type and the page type
   * @deprecated 
   */
  revisions?: Maybe<PageToRevisionConnection>;
  /**
   * The Yoast SEO data of the page
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The page type */
export type PageAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The page type */
export type PageChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The page type */
export type PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToCommentConnectionWhereArgs>;
};


/** The page type */
export type PageContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The page type */
export type PageEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The page type */
export type PageRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToRevisionConnectionWhereArgs>;
};


/** The page type */
export type PageTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};


/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri: Scalars['String'];
};

/** Gutenberg post interface */
export type BlockEditorContentNode = {
  /** Gutenberg blocks */
  blocks?: Maybe<Array<Block>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<Block>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
};

/** Gutenberg block interface */
export type Block = {
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<Block>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: Node;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the Comment type */
export type PageToCommentConnection = {
  __typename?: 'PageToCommentConnection';
  /**
   * Edges for the PageToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
  __typename?: 'PageToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = {
  __typename?: 'PageToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the pageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
  __typename?: 'PageToRevisionConnection';
  /**
   * Edges for the pageToRevisionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
  __typename?: 'PageToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = {
  __typename?: 'UserToPostConnection';
  /**
   * Edges for the UserToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = {
  __typename?: 'UserToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** The post type */
export type Post = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithExcerpt & NodeWithComments & NodeWithTrackbacks & NodeWithRevisions & MenuItemLinkable & BlockEditorContentNode & {
  __typename?: 'Post';
  /** @deprecated  */
  PostFields?: Maybe<Post_Postfields>;
  /**
   * Connection between the post type and the Series type
   * @deprecated 
   */
  serieses?: Maybe<PostToSeriesConnection>;
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated 
   */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated 
   */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated 
   */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  blocks?: Maybe<Array<Block>>;
  /**
   * Gutenberg blocks as json string
   * @deprecated 
   */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the category type
   * @deprecated 
   */
  categories?: Maybe<PostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<PostToCommentConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the post object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * True if the node is a revision of another node
   * @deprecated 
   */
  isRevision?: Maybe<Scalars['Boolean']>;
  /**
   * Whether this page is sticky
   * @deprecated 
   */
  isSticky: Scalars['Boolean'];
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the post type and the postFormat type
   * @deprecated 
   */
  postFormats?: Maybe<PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int'];
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  preview?: Maybe<PostToPreviewConnectionEdge>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocks?: Maybe<Array<Block>>;
  /**
   * Previewed Gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
   * @deprecated 
   */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  revisions?: Maybe<PostToRevisionConnection>;
  /**
   * The Yoast SEO data of the post
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the tag type
   * @deprecated 
   */
  tags?: Maybe<PostToTagConnection>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * Connection between the post type and the TermNode type
   * @deprecated 
   */
  terms?: Maybe<PostToTermNodeConnection>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The post type */
export type PostSeriesesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToSeriesConnectionWhereArgs>;
};


/** The post type */
export type PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCommentConnectionWhereArgs>;
};


/** The post type */
export type PostContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The post type */
export type PostExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToPostFormatConnectionWhereArgs>;
};


/** The post type */
export type PostRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToRevisionConnectionWhereArgs>;
};


/** The post type */
export type PostTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTagConnectionWhereArgs>;
};


/** The post type */
export type PostTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTermNodeConnectionWhereArgs>;
};


/** The post type */
export type PostTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};


/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Field Group */
export type Post_Postfields = {
  __typename?: 'Post_Postfields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  relatedPosts?: Maybe<Array<Maybe<Post_Postfields_RelatedPosts>>>;
};

export type Post_Postfields_RelatedPosts = Post;

/** Arguments for filtering the PostToSeriesConnection connection */
export type PostToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

/** Connection between the post type and the Series type */
export type PostToSeriesConnection = {
  __typename?: 'PostToSeriesConnection';
  /**
   * Edges for the PostToSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToSeriesConnectionEdge = {
  __typename?: 'PostToSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** The Series type */
export type Series = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & HierarchicalTermNode & MenuItemLinkable & {
  __typename?: 'Series';
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Taxonomy: Series&quot; was assigned to the &quot;taxonomy_series&quot; taxonomy
   * @deprecated 
   */
  SeriesFields?: Maybe<Series_Seriesfields>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  seriesId?: Maybe<Scalars['Int']>;
  /**
   * The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<SeriesToAncestorsSeriesConnection>;
  /**
   * Connection between the Series type and the Series type
   * @deprecated 
   */
  children?: Maybe<SeriesToSeriesConnection>;
  /**
   * Connection between the Series type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<SeriesToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the Series type and the Series type
   * @deprecated 
   */
  parent?: Maybe<SeriesToParentSeriesConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Series type and the post type
   * @deprecated 
   */
  posts?: Maybe<SeriesToPostConnection>;
  /**
   * The Yoast SEO data of the Serieses taxonomy.
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the Series type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<SeriesToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The Series type */
export type SeriesAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Series type */
export type SeriesChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SeriesToSeriesConnectionWhereArgs>;
};


/** The Series type */
export type SeriesContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SeriesToContentNodeConnectionWhereArgs>;
};


/** The Series type */
export type SeriesEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Series type */
export type SeriesEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Series type */
export type SeriesPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SeriesToPostConnectionWhereArgs>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** Unique identifier for the term */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  /**
   * Edges for the TermNodeToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /**
   * Edges for the TermNodeToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Field Group */
export type Series_Seriesfields = {
  __typename?: 'Series_Seriesfields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  index?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  seriesImage?: Maybe<MediaItem>;
  /** @deprecated  */
  youtubePlaylist?: Maybe<Scalars['String']>;
};

/** Connection between the Series type and the Series type */
export type SeriesToAncestorsSeriesConnection = {
  __typename?: 'SeriesToAncestorsSeriesConnection';
  /**
   * Edges for the SeriesToAncestorsSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SeriesToAncestorsSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type SeriesToAncestorsSeriesConnectionEdge = {
  __typename?: 'SeriesToAncestorsSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** Arguments for filtering the SeriesToSeriesConnection connection */
export type SeriesToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Series type and the Series type */
export type SeriesToSeriesConnection = {
  __typename?: 'SeriesToSeriesConnection';
  /**
   * Edges for the SeriesToSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SeriesToSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type SeriesToSeriesConnectionEdge = {
  __typename?: 'SeriesToSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** Arguments for filtering the SeriesToContentNodeConnection connection */
export type SeriesToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the Series type and the ContentNode type */
export type SeriesToContentNodeConnection = {
  __typename?: 'SeriesToContentNodeConnection';
  /**
   * Edges for the SeriesToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SeriesToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type SeriesToContentNodeConnectionEdge = {
  __typename?: 'SeriesToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Connection between the Series type and the Series type */
export type SeriesToParentSeriesConnectionEdge = {
  __typename?: 'SeriesToParentSeriesConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** Arguments for filtering the SeriesToPostConnection connection */
export type SeriesToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the Series type and the post type */
export type SeriesToPostConnection = {
  __typename?: 'SeriesToPostConnection';
  /**
   * Edges for the SeriesToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SeriesToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type SeriesToPostConnectionEdge = {
  __typename?: 'SeriesToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Connection between the Series type and the Taxonomy type */
export type SeriesToTaxonomyConnectionEdge = {
  __typename?: 'SeriesToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the category type */
export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection';
  /**
   * Edges for the PostToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** The category type */
export type Category = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & HierarchicalTermNode & MenuItemLinkable & {
  __typename?: 'Category';
  /**
   * The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * Connection between the category type and the CaseStudy type
   * @deprecated 
   */
  caseStudies?: Maybe<CategoryToCaseStudyConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the category type and the category type
   * @deprecated 
   */
  children?: Maybe<CategoryToCategoryConnection>;
  /**
   * Connection between the category type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<CategoryToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the category type and the Event type
   * @deprecated 
   */
  events?: Maybe<CategoryToEventConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Connection between the category type and the Inspiration type
   * @deprecated 
   */
  inspirations?: Maybe<CategoryToInspirationConnection>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the category type and the category type
   * @deprecated 
   */
  parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the category type and the post type
   * @deprecated 
   */
  posts?: Maybe<CategoryToPostConnection>;
  /**
   * Connection between the category type and the Review type
   * @deprecated 
   */
  reviews?: Maybe<CategoryToReviewConnection>;
  /**
   * The Yoast SEO data of the Categories taxonomy.
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the category type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The category type */
export type CategoryAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryCaseStudiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToCaseStudyConnectionWhereArgs>;
};


/** The category type */
export type CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type CategoryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToContentNodeConnectionWhereArgs>;
};


/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToEventConnectionWhereArgs>;
};


/** The category type */
export type CategoryInspirationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToInspirationConnectionWhereArgs>;
};


/** The category type */
export type CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToPostConnectionWhereArgs>;
};


/** The category type */
export type CategoryReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToReviewConnectionWhereArgs>;
};

/** Connection between the category type and the category type */
export type CategoryToAncestorsCategoryConnection = {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  /**
   * Edges for the CategoryToAncestorsCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToCaseStudyConnection connection */
export type CategoryToCaseStudyConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the CaseStudy type */
export type CategoryToCaseStudyConnection = {
  __typename?: 'CategoryToCaseStudyConnection';
  /**
   * Edges for the CategoryToCaseStudyConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToCaseStudyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToCaseStudyConnectionEdge = {
  __typename?: 'CategoryToCaseStudyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CaseStudy>;
};

/** The CaseStudy type */
export type CaseStudy = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithFeaturedImage & HierarchicalContentNode & MenuItemLinkable & BlockEditorContentNode & {
  __typename?: 'CaseStudy';
  /** @deprecated  */
  CaseStudyFields?: Maybe<CaseStudy_Casestudyfields>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  caseStudyId: Scalars['Int'];
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  blocks?: Maybe<Array<Block>>;
  /**
   * Gutenberg blocks as json string
   * @deprecated 
   */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * Connection between the CaseStudy type and the category type
   * @deprecated 
   */
  categories?: Maybe<CaseStudyToCategoryConnection>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the case object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the CaseStudy type and the CaseStudy type
   * @deprecated 
   */
  preview?: Maybe<CaseStudyToPreviewConnectionEdge>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocks?: Maybe<Array<Block>>;
  /**
   * Previewed Gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The Yoast SEO data of the CaseStudy
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the CaseStudy type and the tag type
   * @deprecated 
   */
  tags?: Maybe<CaseStudyToTagConnection>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The CaseStudy type */
export type CaseStudyAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The CaseStudy type */
export type CaseStudyCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CaseStudyToCategoryConnectionWhereArgs>;
};


/** The CaseStudy type */
export type CaseStudyChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The CaseStudy type */
export type CaseStudyContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The CaseStudy type */
export type CaseStudyEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The CaseStudy type */
export type CaseStudyEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The CaseStudy type */
export type CaseStudyTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CaseStudyToTagConnectionWhereArgs>;
};


/** The CaseStudy type */
export type CaseStudyTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Field Group */
export type CaseStudy_Casestudyfields = {
  __typename?: 'CaseStudy_Casestudyfields';
  /** @deprecated  */
  blocks?: Maybe<Array<Maybe<CaseStudy_Casestudyfields_Blocks>>>;
  /** @deprecated  */
  devicePreviews?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  devices?: Maybe<CaseStudy_Casestudyfields_Devices>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gallery?: Maybe<Array<Maybe<MediaItem>>>;
  /** @deprecated  */
  intro?: Maybe<CaseStudy_Casestudyfields_Intro>;
  /** @deprecated  */
  related?: Maybe<Array<Maybe<CaseStudy_Casestudyfields_Related>>>;
  /** @deprecated  */
  siteUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  testimonials?: Maybe<Array<Maybe<CaseStudy_Casestudyfields_Testimonials>>>;
};

/** Field Group */
export type CaseStudy_Casestudyfields_Blocks = {
  __typename?: 'CaseStudy_Casestudyfields_blocks';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fields?: Maybe<CaseStudy_Casestudyfields_Blocks_Fields>;
};

/** Field Group */
export type CaseStudy_Casestudyfields_Blocks_Fields = {
  __typename?: 'CaseStudy_Casestudyfields_blocks_Fields';
  /** @deprecated  */
  columnOne?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columnTwo?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

/** Field Group */
export type CaseStudy_Casestudyfields_Devices = {
  __typename?: 'CaseStudy_Casestudyfields_Devices';
  /** @deprecated  */
  desktop?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mobile?: Maybe<Scalars['String']>;
};

/** Field Group */
export type CaseStudy_Casestudyfields_Intro = {
  __typename?: 'CaseStudy_Casestudyfields_Intro';
  /** @deprecated  */
  description?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  illustration?: Maybe<MediaItem>;
  /** @deprecated  */
  subtitle?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

export type CaseStudy_Casestudyfields_Related = CaseStudy;

/** Field Group */
export type CaseStudy_Casestudyfields_Testimonials = {
  __typename?: 'CaseStudy_Casestudyfields_testimonials';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  testimonial?: Maybe<CaseStudy_Casestudyfields_Testimonials_Testimonial>;
};

/** Field Group */
export type CaseStudy_Casestudyfields_Testimonials_Testimonial = {
  __typename?: 'CaseStudy_Casestudyfields_testimonials_Testimonial';
  /** @deprecated  */
  author?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  logo?: Maybe<MediaItem>;
  /** @deprecated  */
  media?: Maybe<MediaItem>;
  /** @deprecated  */
  role?: Maybe<Scalars['String']>;
  /** @deprecated  */
  testimonial?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CaseStudyToCategoryConnection connection */
export type CaseStudyToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the CaseStudy type and the category type */
export type CaseStudyToCategoryConnection = {
  __typename?: 'CaseStudyToCategoryConnection';
  /**
   * Edges for the CaseStudyToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CaseStudyToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CaseStudyToCategoryConnectionEdge = {
  __typename?: 'CaseStudyToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Connection between the CaseStudy type and the CaseStudy type */
export type CaseStudyToPreviewConnectionEdge = {
  __typename?: 'CaseStudyToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<CaseStudy>;
};

/** Arguments for filtering the CaseStudyToTagConnection connection */
export type CaseStudyToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the CaseStudy type and the tag type */
export type CaseStudyToTagConnection = {
  __typename?: 'CaseStudyToTagConnection';
  /**
   * Edges for the CaseStudyToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CaseStudyToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CaseStudyToTagConnectionEdge = {
  __typename?: 'CaseStudyToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** The tag type */
export type Tag = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & MenuItemLinkable & {
  __typename?: 'Tag';
  /**
   * Connection between the tag type and the CaseStudy type
   * @deprecated 
   */
  caseStudies?: Maybe<TagToCaseStudyConnection>;
  /**
   * Connection between the tag type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<TagToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the tag type and the Event type
   * @deprecated 
   */
  events?: Maybe<TagToEventConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Connection between the tag type and the Inspiration type
   * @deprecated 
   */
  inspirations?: Maybe<TagToInspirationConnection>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the tag type and the post type
   * @deprecated 
   */
  posts?: Maybe<TagToPostConnection>;
  /**
   * Connection between the tag type and the Review type
   * @deprecated 
   */
  reviews?: Maybe<TagToReviewConnection>;
  /**
   * The Yoast SEO data of the Tags taxonomy.
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the tag type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The tag type */
export type TagCaseStudiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToCaseStudyConnectionWhereArgs>;
};


/** The tag type */
export type TagContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToContentNodeConnectionWhereArgs>;
};


/** The tag type */
export type TagEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The tag type */
export type TagEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToEventConnectionWhereArgs>;
};


/** The tag type */
export type TagInspirationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToInspirationConnectionWhereArgs>;
};


/** The tag type */
export type TagPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToPostConnectionWhereArgs>;
};


/** The tag type */
export type TagReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToReviewConnectionWhereArgs>;
};

/** Arguments for filtering the TagToCaseStudyConnection connection */
export type TagToCaseStudyConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the CaseStudy type */
export type TagToCaseStudyConnection = {
  __typename?: 'TagToCaseStudyConnection';
  /**
   * Edges for the TagToCaseStudyConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToCaseStudyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToCaseStudyConnectionEdge = {
  __typename?: 'TagToCaseStudyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CaseStudy>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the ContentNode type */
export type TagToContentNodeConnection = {
  __typename?: 'TagToContentNodeConnection';
  /**
   * Edges for the TagToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = {
  __typename?: 'TagToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the TagToEventConnection connection */
export type TagToEventConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the Event type */
export type TagToEventConnection = {
  __typename?: 'TagToEventConnection';
  /**
   * Edges for the TagToEventConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToEventConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Event>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToEventConnectionEdge = {
  __typename?: 'TagToEventConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Event>;
};

/** The Event type */
export type Event = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithFeaturedImage & HierarchicalContentNode & MenuItemLinkable & BlockEditorContentNode & {
  __typename?: 'Event';
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  eventId: Scalars['Int'];
  /** @deprecated  */
  PostTypeEventFields?: Maybe<Event_Posttypeeventfields>;
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  blocks?: Maybe<Array<Block>>;
  /**
   * Gutenberg blocks as json string
   * @deprecated 
   */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * Connection between the Event type and the category type
   * @deprecated 
   */
  categories?: Maybe<EventToCategoryConnection>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the event object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Event type and the Event type
   * @deprecated 
   */
  preview?: Maybe<EventToPreviewConnectionEdge>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocks?: Maybe<Array<Block>>;
  /**
   * Previewed Gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The Yoast SEO data of the Event
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the Event type and the tag type
   * @deprecated 
   */
  tags?: Maybe<EventToTagConnection>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The Event type */
export type EventAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The Event type */
export type EventCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<EventToCategoryConnectionWhereArgs>;
};


/** The Event type */
export type EventChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The Event type */
export type EventContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The Event type */
export type EventEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Event type */
export type EventEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Event type */
export type EventTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<EventToTagConnectionWhereArgs>;
};


/** The Event type */
export type EventTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Field Group */
export type Event_Posttypeeventfields = {
  __typename?: 'Event_Posttypeeventfields';
  /** @deprecated  */
  date?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
  /** @deprecated  */
  venue?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the EventToCategoryConnection connection */
export type EventToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Event type and the category type */
export type EventToCategoryConnection = {
  __typename?: 'EventToCategoryConnection';
  /**
   * Edges for the EventToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<EventToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type EventToCategoryConnectionEdge = {
  __typename?: 'EventToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Connection between the Event type and the Event type */
export type EventToPreviewConnectionEdge = {
  __typename?: 'EventToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Event>;
};

/** Arguments for filtering the EventToTagConnection connection */
export type EventToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Event type and the tag type */
export type EventToTagConnection = {
  __typename?: 'EventToTagConnection';
  /**
   * Edges for the EventToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<EventToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type EventToTagConnectionEdge = {
  __typename?: 'EventToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the TagToInspirationConnection connection */
export type TagToInspirationConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the Inspiration type */
export type TagToInspirationConnection = {
  __typename?: 'TagToInspirationConnection';
  /**
   * Edges for the TagToInspirationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToInspirationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToInspirationConnectionEdge = {
  __typename?: 'TagToInspirationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Inspiration>;
};

/** The Inspiration type */
export type Inspiration = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithFeaturedImage & HierarchicalContentNode & MenuItemLinkable & BlockEditorContentNode & {
  __typename?: 'Inspiration';
  /** @deprecated  */
  InspirationFields?: Maybe<Inspiration_Inspirationfields>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  inspirationId: Scalars['Int'];
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  blocks?: Maybe<Array<Block>>;
  /**
   * Gutenberg blocks as json string
   * @deprecated 
   */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * Connection between the Inspiration type and the category type
   * @deprecated 
   */
  categories?: Maybe<InspirationToCategoryConnection>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the inspiration object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Inspiration type and the Inspiration type
   * @deprecated 
   */
  preview?: Maybe<InspirationToPreviewConnectionEdge>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocks?: Maybe<Array<Block>>;
  /**
   * Previewed Gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The Yoast SEO data of the Inspiration
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the Inspiration type and the tag type
   * @deprecated 
   */
  tags?: Maybe<InspirationToTagConnection>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The Inspiration type */
export type InspirationAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The Inspiration type */
export type InspirationCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<InspirationToCategoryConnectionWhereArgs>;
};


/** The Inspiration type */
export type InspirationChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The Inspiration type */
export type InspirationContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The Inspiration type */
export type InspirationEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Inspiration type */
export type InspirationEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Inspiration type */
export type InspirationTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<InspirationToTagConnectionWhereArgs>;
};


/** The Inspiration type */
export type InspirationTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Field Group */
export type Inspiration_Inspirationfields = {
  __typename?: 'Inspiration_Inspirationfields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  media?: Maybe<MediaItem>;
  /** @deprecated  */
  source?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the InspirationToCategoryConnection connection */
export type InspirationToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Inspiration type and the category type */
export type InspirationToCategoryConnection = {
  __typename?: 'InspirationToCategoryConnection';
  /**
   * Edges for the InspirationToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<InspirationToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type InspirationToCategoryConnectionEdge = {
  __typename?: 'InspirationToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Connection between the Inspiration type and the Inspiration type */
export type InspirationToPreviewConnectionEdge = {
  __typename?: 'InspirationToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Inspiration>;
};

/** Arguments for filtering the InspirationToTagConnection connection */
export type InspirationToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Inspiration type and the tag type */
export type InspirationToTagConnection = {
  __typename?: 'InspirationToTagConnection';
  /**
   * Edges for the InspirationToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<InspirationToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type InspirationToTagConnectionEdge = {
  __typename?: 'InspirationToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the post type */
export type TagToPostConnection = {
  __typename?: 'TagToPostConnection';
  /**
   * Edges for the TagToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = {
  __typename?: 'TagToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the TagToReviewConnection connection */
export type TagToReviewConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the Review type */
export type TagToReviewConnection = {
  __typename?: 'TagToReviewConnection';
  /**
   * Edges for the TagToReviewConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToReviewConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Review>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToReviewConnectionEdge = {
  __typename?: 'TagToReviewConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Review>;
};

/** The Review type */
export type Review = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithFeaturedImage & HierarchicalContentNode & MenuItemLinkable & BlockEditorContentNode & {
  __typename?: 'Review';
  /** @deprecated  */
  ReviewFields?: Maybe<Review_Reviewfields>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  reviewId: Scalars['Int'];
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  blocks?: Maybe<Array<Block>>;
  /**
   * Gutenberg blocks as json string
   * @deprecated 
   */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * Connection between the Review type and the category type
   * @deprecated 
   */
  categories?: Maybe<ReviewToCategoryConnection>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the review object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Review type and the Review type
   * @deprecated 
   */
  preview?: Maybe<ReviewToPreviewConnectionEdge>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocks?: Maybe<Array<Block>>;
  /**
   * Previewed Gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The Yoast SEO data of the Review
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the Review type and the tag type
   * @deprecated 
   */
  tags?: Maybe<ReviewToTagConnection>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The Review type */
export type ReviewAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The Review type */
export type ReviewCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ReviewToCategoryConnectionWhereArgs>;
};


/** The Review type */
export type ReviewChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The Review type */
export type ReviewContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The Review type */
export type ReviewEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Review type */
export type ReviewEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The Review type */
export type ReviewTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ReviewToTagConnectionWhereArgs>;
};


/** The Review type */
export type ReviewTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Field Group */
export type Review_Reviewfields = {
  __typename?: 'Review_Reviewfields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rating?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the ReviewToCategoryConnection connection */
export type ReviewToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Review type and the category type */
export type ReviewToCategoryConnection = {
  __typename?: 'ReviewToCategoryConnection';
  /**
   * Edges for the ReviewToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ReviewToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ReviewToCategoryConnectionEdge = {
  __typename?: 'ReviewToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Connection between the Review type and the Review type */
export type ReviewToPreviewConnectionEdge = {
  __typename?: 'ReviewToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Review>;
};

/** Arguments for filtering the ReviewToTagConnection connection */
export type ReviewToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Review type and the tag type */
export type ReviewToTagConnection = {
  __typename?: 'ReviewToTagConnection';
  /**
   * Edges for the ReviewToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ReviewToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ReviewToTagConnectionEdge = {
  __typename?: 'ReviewToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Connection between the tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = {
  __typename?: 'TagToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
  __typename?: 'CategoryToCategoryConnection';
  /**
   * Edges for the CategoryToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
  __typename?: 'CategoryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the ContentNode type */
export type CategoryToContentNodeConnection = {
  __typename?: 'CategoryToContentNodeConnection';
  /**
   * Edges for the CategoryToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the CategoryToEventConnection connection */
export type CategoryToEventConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the Event type */
export type CategoryToEventConnection = {
  __typename?: 'CategoryToEventConnection';
  /**
   * Edges for the CategoryToEventConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToEventConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Event>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToEventConnectionEdge = {
  __typename?: 'CategoryToEventConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Event>;
};

/** Arguments for filtering the CategoryToInspirationConnection connection */
export type CategoryToInspirationConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the Inspiration type */
export type CategoryToInspirationConnection = {
  __typename?: 'CategoryToInspirationConnection';
  /**
   * Edges for the CategoryToInspirationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToInspirationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToInspirationConnectionEdge = {
  __typename?: 'CategoryToInspirationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Inspiration>;
};

/** Connection between the category type and the category type */
export type CategoryToParentCategoryConnectionEdge = {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the post type */
export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection';
  /**
   * Edges for the CategoryToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the CategoryToReviewConnection connection */
export type CategoryToReviewConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the Review type */
export type CategoryToReviewConnection = {
  __typename?: 'CategoryToReviewConnection';
  /**
   * Edges for the CategoryToReviewConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToReviewConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Review>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToReviewConnectionEdge = {
  __typename?: 'CategoryToReviewConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Review>;
};

/** Connection between the category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the Comment type */
export type PostToCommentConnection = {
  __typename?: 'PostToCommentConnection';
  /**
   * Edges for the PostToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
  __typename?: 'PostToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the postFormat type */
export type PostToPostFormatConnection = {
  __typename?: 'PostToPostFormatConnection';
  /**
   * Edges for the PostToPostFormatConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = {
  __typename?: 'PostToPostFormatConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<PostFormat>;
};

/** The postFormat type */
export type PostFormat = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & MenuItemLinkable & {
  __typename?: 'PostFormat';
  /**
   * Connection between the postFormat type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<PostFormatToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the postFormat type and the post type
   * @deprecated 
   */
  posts?: Maybe<PostFormatToPostConnection>;
  /**
   * The Yoast SEO data of the Formats taxonomy.
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the postFormat type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The postFormat type */
export type PostFormatContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
};


/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The postFormat type */
export type PostFormatPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToPostConnectionWhereArgs>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = {
  __typename?: 'PostFormatToContentNodeConnection';
  /**
   * Edges for the PostFormatToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the post type */
export type PostFormatToPostConnection = {
  __typename?: 'PostFormatToPostConnection';
  /**
   * Edges for the PostFormatToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = {
  __typename?: 'PostFormatToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = {
  __typename?: 'PostToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the postToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
  __typename?: 'PostToRevisionConnection';
  /**
   * Edges for the postToRevisionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
  __typename?: 'PostToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the tag type */
export type PostToTagConnection = {
  __typename?: 'PostToTagConnection';
  /**
   * Edges for the PostToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = {
  __typename?: 'PostToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Postformat = 'POSTFORMAT',
  Series = 'SERIES',
  Tag = 'TAG'
}

/** Connection between the post type and the TermNode type */
export type PostToTermNodeConnection = {
  __typename?: 'PostToTermNodeConnection';
  /**
   * Edges for the PostToTermNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = {
  __typename?: 'PostToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<TermNode>;
};

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type UserToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the ContentRevisionUnion type */
export type UserToContentRevisionUnionConnection = {
  __typename?: 'UserToContentRevisionUnionConnection';
  /**
   * Edges for the UserToContentRevisionUnionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToContentRevisionUnionConnectionEdge = {
  __typename?: 'UserToContentRevisionUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentRevisionUnion>;
};

export type ContentRevisionUnion = Post | Page;

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = {
  __typename?: 'UserToUserRoleConnection';
  /**
   * Edges for the UserToUserRoleConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
  __typename?: 'UserToUserRoleConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<UserRole>;
};

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole';
  /**
   * The capabilities that belong to this role
   * @deprecated 
   */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The display name of the role
   * @deprecated 
   */
  displayName?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user role object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The registered name of the role
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
};

export type SeoUser = {
  __typename?: 'SEOUser';
  /** @deprecated  */
  metaDesc?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  /** @deprecated  */
  social?: Maybe<SeoUserSocial>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial';
  /** @deprecated  */
  facebook?: Maybe<Scalars['String']>;
  /** @deprecated  */
  instagram?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkedIn?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mySpace?: Maybe<Scalars['String']>;
  /** @deprecated  */
  pinterest?: Maybe<Scalars['String']>;
  /** @deprecated  */
  soundCloud?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitter?: Maybe<Scalars['String']>;
  /** @deprecated  */
  wikipedia?: Maybe<Scalars['String']>;
  /** @deprecated  */
  youTube?: Maybe<Scalars['String']>;
};

/** Connection between the BlockEditorPreview type and the BlockEditorPreview type */
export type BlockEditorPreviewToPreviewConnectionEdge = {
  __typename?: 'BlockEditorPreviewToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<BlockEditorPreview>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CaseStudyIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum EventIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum InspirationIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ReusableBlockIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** The ReusableBlock type */
export type ReusableBlock = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithContentEditor & BlockEditorContentNode & {
  __typename?: 'ReusableBlock';
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  reusableBlockId: Scalars['Int'];
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  blocks?: Maybe<Array<Block>>;
  /**
   * Gutenberg blocks as json string
   * @deprecated 
   */
  blocksJSON?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the wp_block object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Connection between the ReusableBlock type and the ReusableBlock type
   * @deprecated 
   */
  preview?: Maybe<ReusableBlockToPreviewConnectionEdge>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocks?: Maybe<Array<Block>>;
  /**
   * Previewed gutenberg blocks
   * @deprecated 
   */
  previewBlocksFrom?: Maybe<Array<Block>>;
  /**
   * Previewed gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksFromJSON?: Maybe<Scalars['String']>;
  /**
   * Previewed Gutenberg blocks as json string
   * @deprecated 
   */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The Yoast SEO data of the ReusableBlock
   * @deprecated 
   */
  seo?: Maybe<Seo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The ReusableBlock type */
export type ReusableBlockContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The ReusableBlock type */
export type ReusableBlockEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type ReusableBlockEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type ReusableBlockPreviewBlocksFromArgs = {
  databaseId: Scalars['Int'];
};


/** The ReusableBlock type */
export type ReusableBlockPreviewBlocksFromJsonArgs = {
  databaseId: Scalars['Int'];
};


/** The ReusableBlock type */
export type ReusableBlockTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Connection between the ReusableBlock type and the ReusableBlock type */
export type ReusableBlockToPreviewConnectionEdge = {
  __typename?: 'ReusableBlockToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ReusableBlock>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ReviewIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SeriesIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToSeriesConnection connection */
export type RootQueryToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Series type */
export type RootQueryToSeriesConnection = {
  __typename?: 'RootQueryToSeriesConnection';
  /**
   * Edges for the RootQueryToSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToSeriesConnectionEdge = {
  __typename?: 'RootQueryToSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings';
  /**
   * Allow people to submit comments on new posts.
   * @deprecated 
   */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated 
   */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /**
   * A date format for all date strings.
   * @deprecated 
   */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /**
   * Site tagline.
   * @deprecated 
   */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated 
   */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /**
   * WordPress locale code.
   * @deprecated 
   */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /**
   * A day number of the week that the week should start on.
   * @deprecated 
   */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /**
   * A time format for all time strings.
   * @deprecated 
   */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /**
   * A city in the same timezone as you.
   * @deprecated 
   */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /**
   * Site title.
   * @deprecated 
   */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /**
   * Site URL.
   * @deprecated 
   */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /**
   * Blog pages show at most.
   * @deprecated 
   */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /**
   * Default post category.
   * @deprecated 
   */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /**
   * Default post format.
   * @deprecated 
   */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated 
   */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** Arguments for filtering the BlockEditorContentNodeConnection connection */
export type BlockEditorContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the BlockEditorContentNode type */
export type BlockEditorContentNodeConnection = {
  __typename?: 'BlockEditorContentNodeConnection';
  /**
   * Edges for the BlockEditorContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BlockEditorContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<BlockEditorContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type BlockEditorContentNodeConnectionEdge = {
  __typename?: 'BlockEditorContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<BlockEditorContentNode>;
};

/** Arguments for filtering the RootQueryToBlockEditorPreviewConnection connection */
export type RootQueryToBlockEditorPreviewConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate BlockEditorPreviews with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  previewedDatabaseId?: Maybe<Scalars['Int']>;
  previewedParentDatabaseId?: Maybe<Scalars['Int']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Offset pagination input type */
export type OffsetPagination = {
  /** Number of post to show per page. Passed to posts_per_page of WP_Query. */
  offset?: Maybe<Scalars['Int']>;
  /** Number of post to show per page. Passed to posts_per_page of WP_Query. */
  size?: Maybe<Scalars['Int']>;
};

/** Connection between the RootQuery type and the BlockEditorPreview type */
export type RootQueryToBlockEditorPreviewConnection = {
  __typename?: 'RootQueryToBlockEditorPreviewConnection';
  /**
   * Edges for the RootQueryToBlockEditorPreviewConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToBlockEditorPreviewConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<BlockEditorPreview>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToBlockEditorPreviewConnectionEdge = {
  __typename?: 'RootQueryToBlockEditorPreviewConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<BlockEditorPreview>;
};

/** Arguments for filtering the RootQueryToCaseStudyConnection connection */
export type RootQueryToCaseStudyConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate CaseStudys with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the CaseStudy type */
export type RootQueryToCaseStudyConnection = {
  __typename?: 'RootQueryToCaseStudyConnection';
  /**
   * Edges for the RootQueryToCaseStudyConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCaseStudyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCaseStudyConnectionEdge = {
  __typename?: 'RootQueryToCaseStudyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CaseStudy>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection';
  /**
   * Edges for the RootQueryToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = {
  __typename?: 'RootQueryToCommentConnection';
  /**
   * Edges for the RootQueryToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
  __typename?: 'RootQueryToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate content nodes with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = {
  __typename?: 'RootQueryToContentNodeConnection';
  /**
   * Edges for the RootQueryToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = {
  __typename?: 'RootQueryToContentTypeConnection';
  /**
   * Edges for the RootQueryToContentTypeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  /**
   * Allow people to submit comments on new posts.
   * @deprecated 
   */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated 
   */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToEventConnection connection */
export type RootQueryToEventConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate Events with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Event type */
export type RootQueryToEventConnection = {
  __typename?: 'RootQueryToEventConnection';
  /**
   * Edges for the RootQueryToEventConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEventConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Event>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEventConnectionEdge = {
  __typename?: 'RootQueryToEventConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Event>;
};

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  /**
   * A date format for all date strings.
   * @deprecated 
   */
  dateFormat?: Maybe<Scalars['String']>;
  /**
   * Site tagline.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * WordPress locale code.
   * @deprecated 
   */
  language?: Maybe<Scalars['String']>;
  /**
   * A day number of the week that the week should start on.
   * @deprecated 
   */
  startOfWeek?: Maybe<Scalars['Int']>;
  /**
   * A time format for all time strings.
   * @deprecated 
   */
  timeFormat?: Maybe<Scalars['String']>;
  /**
   * A city in the same timezone as you.
   * @deprecated 
   */
  timezone?: Maybe<Scalars['String']>;
  /**
   * Site title.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * Site URL.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToInspirationConnection connection */
export type RootQueryToInspirationConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate Inspirations with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Inspiration type */
export type RootQueryToInspirationConnection = {
  __typename?: 'RootQueryToInspirationConnection';
  /**
   * Edges for the RootQueryToInspirationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToInspirationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToInspirationConnectionEdge = {
  __typename?: 'RootQueryToInspirationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Inspiration>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL'
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate MediaItems with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = {
  __typename?: 'RootQueryToMediaItemConnection';
  /**
   * Edges for the RootQueryToMediaItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by it's name */
  Name = 'NAME'
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = Node & DatabaseIdentifier & {
  __typename?: 'Menu';
  /**
   * The number of items in the menu
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The unique identifier stored in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The globally unique identifier of the nav menu object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Menu type and the MenuItem type
   * @deprecated 
   */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
};


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Registered menu locations */
export enum MenuLocationEnum {
  FooterFour = 'FOOTER_FOUR',
  FooterOne = 'FOOTER_ONE',
  FooterThree = 'FOOTER_THREE',
  FooterTwo = 'FOOTER_TWO',
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection';
  /**
   * Edges for the MenuToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = Node & DatabaseIdentifier & {
  __typename?: 'MenuItem';
  /**
   * Connection between the MenuItem type and the MenuItem type
   * @deprecated 
   */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /**
   * Connection from MenuItem to it&#039;s connected node
   * @deprecated 
   */
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  /**
   * Class attribute for the menu item link
   * @deprecated 
   */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The unique identifier stored in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Description of the menu item.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the nav menu item object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Label or title of the menu item.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Link relationship (XFN) of the menu item.
   * @deprecated 
   */
  linkRelationship?: Maybe<Scalars['String']>;
  /** @deprecated  */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * The Menu a MenuItem is part of
   * @deprecated 
   */
  menu?: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuItemId?: Maybe<Scalars['Int']>;
  /**
   * Menu item order
   * @deprecated 
   */
  order?: Maybe<Scalars['Int']>;
  /**
   * The database id of the parent menu item or null if it is the root
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent nav menu item object.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Path for the resource. Relative path for internal resources. Absolute path for external resources.
   * @deprecated 
   */
  path: Scalars['String'];
  /**
   * Target attribute for the menu item link.
   * @deprecated 
   */
  target?: Maybe<Scalars['String']>;
  /**
   * Title attribute for the menu item link
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URL or destination of the menu item.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
  __typename?: 'MenuItemToMenuItemConnection';
  /**
   * Edges for the MenuItemToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<MenuItemLinkable>;
};

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Post | Page | CaseStudy | Event | Inspiration | Review | Category | Tag | PostFormat | Series;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = {
  __typename?: 'MenuItemToMenuConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = {
  __typename?: 'RootQueryToMenuItemConnection';
  /**
   * Edges for the RootQueryToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = {
  __typename?: 'RootQueryToMenuConnection';
  /**
   * Edges for the RootQueryToMenuConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Menu>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
  __typename?: 'RootQueryToMenuConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate Pages with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = {
  __typename?: 'RootQueryToPageConnection';
  /**
   * Edges for the RootQueryToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
  __typename?: 'RootQueryToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin';
  /**
   * Name of the plugin author(s), may also be a company name.
   * @deprecated 
   */
  author?: Maybe<Scalars['String']>;
  /**
   * URI for the related author(s)/company website.
   * @deprecated 
   */
  authorUri?: Maybe<Scalars['String']>;
  /**
   * Description of the plugin.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the plugin object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the plugin.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Plugin path.
   * @deprecated 
   */
  path?: Maybe<Scalars['String']>;
  /**
   * URI for the plugin website. This is useful for directing users for support requests etc.
   * @deprecated 
   */
  pluginUri?: Maybe<Scalars['String']>;
  /**
   * Current version of the plugin.
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = {
  __typename?: 'RootQueryToPluginConnection';
  /**
   * Edges for the RootQueryToPluginConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Plugin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
  __typename?: 'RootQueryToPluginConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Plugin>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = {
  __typename?: 'RootQueryToPostFormatConnection';
  /**
   * Edges for the RootQueryToPostFormatConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<PostFormat>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate Posts with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection';
  /**
   * Edges for the RootQueryToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  /**
   * Blog pages show at most.
   * @deprecated 
   */
  postsPerPage?: Maybe<Scalars['Int']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  /**
   * Edges for the RootQueryToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /**
   * Edges for the RootQueryToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the RootQueryToReusableBlockConnection connection */
export type RootQueryToReusableBlockConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate ReusableBlocks with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ReusableBlock type */
export type RootQueryToReusableBlockConnection = {
  __typename?: 'RootQueryToReusableBlockConnection';
  /**
   * Edges for the RootQueryToReusableBlockConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToReusableBlockConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ReusableBlock>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToReusableBlockConnectionEdge = {
  __typename?: 'RootQueryToReusableBlockConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ReusableBlock>;
};

/** Arguments for filtering the RootQueryToReviewConnection connection */
export type RootQueryToReviewConnectionWhereArgs = {
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Paginate Reviews with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Review type */
export type RootQueryToReviewConnection = {
  __typename?: 'RootQueryToReviewConnection';
  /**
   * Edges for the RootQueryToReviewConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToReviewConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Review>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToReviewConnectionEdge = {
  __typename?: 'RootQueryToReviewConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Review>;
};

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type RootQueryToContentRevisionUnionConnection = {
  __typename?: 'RootQueryToContentRevisionUnionConnection';
  /**
   * Edges for the RootQueryToContentRevisionUnionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentRevisionUnionConnectionEdge = {
  __typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentRevisionUnion>;
};

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
  __typename?: 'SEOConfig';
  /** @deprecated  */
  breadcrumbs?: Maybe<SeoBreadcrumbs>;
  /** @deprecated  */
  openGraph?: Maybe<SeoOpenGraph>;
  /** @deprecated  */
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>;
  /** @deprecated  */
  schema?: Maybe<SeoSchema>;
  /** @deprecated  */
  social?: Maybe<SeoSocial>;
  /** @deprecated  */
  webmaster?: Maybe<SeoWebmaster>;
};

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs';
  /** @deprecated  */
  archivePrefix?: Maybe<Scalars['String']>;
  /** @deprecated  */
  boldLast?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  homeText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  notFoundText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  prefix?: Maybe<Scalars['String']>;
  /** @deprecated  */
  searchPrefix?: Maybe<Scalars['String']>;
  /** @deprecated  */
  separator?: Maybe<Scalars['String']>;
  /** @deprecated  */
  showBlogPage?: Maybe<Scalars['Boolean']>;
};

/** The Open Graph data */
export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph';
  /** @deprecated  */
  defaultImage?: Maybe<MediaItem>;
  /** @deprecated  */
  frontPage?: Maybe<SeoOpenGraphFrontPage>;
};

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage';
  /** @deprecated  */
  description?: Maybe<Scalars['String']>;
  /** @deprecated  */
  image?: Maybe<MediaItem>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
  __typename?: 'SEORedirect';
  /** @deprecated  */
  format?: Maybe<Scalars['String']>;
  /** @deprecated  */
  origin?: Maybe<Scalars['String']>;
  /** @deprecated  */
  target?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO schema data */
export type SeoSchema = {
  __typename?: 'SEOSchema';
  /** @deprecated  */
  companyLogo?: Maybe<MediaItem>;
  /** @deprecated  */
  companyName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  companyOrPerson?: Maybe<Scalars['String']>;
  /** @deprecated  */
  logo?: Maybe<MediaItem>;
  /** @deprecated  */
  personLogo?: Maybe<MediaItem>;
  /** @deprecated  */
  siteName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  siteUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  wordpressSiteName?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Social media links */
export type SeoSocial = {
  __typename?: 'SEOSocial';
  /** @deprecated  */
  facebook?: Maybe<SeoSocialFacebook>;
  /** @deprecated  */
  instagram?: Maybe<SeoSocialInstagram>;
  /** @deprecated  */
  linkedIn?: Maybe<SeoSocialLinkedIn>;
  /** @deprecated  */
  mySpace?: Maybe<SeoSocialMySpace>;
  /** @deprecated  */
  pinterest?: Maybe<SeoSocialPinterest>;
  /** @deprecated  */
  twitter?: Maybe<SeoSocialTwitter>;
  /** @deprecated  */
  wikipedia?: Maybe<SeoSocialWikipedia>;
  /** @deprecated  */
  youTube?: Maybe<SeoSocialYoutube>;
};

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook';
  /** @deprecated  */
  defaultImage?: Maybe<MediaItem>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest';
  /** @deprecated  */
  metaTag?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter';
  /** @deprecated  */
  cardType?: Maybe<SeoCardType>;
  /** @deprecated  */
  username?: Maybe<Scalars['String']>;
};

/** Types of cards */
export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
  __typename?: 'SEOWebmaster';
  /** @deprecated  */
  baiduVerify?: Maybe<Scalars['String']>;
  /** @deprecated  */
  googleVerify?: Maybe<Scalars['String']>;
  /** @deprecated  */
  msVerify?: Maybe<Scalars['String']>;
  /** @deprecated  */
  yandexVerify?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = {
  __typename?: 'RootQueryToTagConnection';
  /**
   * Edges for the RootQueryToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
  __typename?: 'RootQueryToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = {
  __typename?: 'RootQueryToTaxonomyConnection';
  /**
   * Edges for the RootQueryToTaxonomyConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = {
  __typename?: 'RootQueryToTermNodeConnection';
  /**
   * Edges for the RootQueryToTermNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<TermNode>;
};

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme';
  /**
   * Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   * @deprecated 
   */
  author?: Maybe<Scalars['String']>;
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ).
   * @deprecated 
   */
  authorUri?: Maybe<Scalars['String']>;
  /**
   * The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ).
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the theme object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ).
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot().
   * @deprecated 
   */
  screenshot?: Maybe<Scalars['String']>;
  /**
   * The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet().
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ).
   * @deprecated 
   */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   * @deprecated 
   */
  themeUri?: Maybe<Scalars['String']>;
  /**
   * The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ).
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = {
  __typename?: 'RootQueryToThemeConnection';
  /**
   * Edges for the RootQueryToThemeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Theme>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
  __typename?: 'RootQueryToThemeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Theme>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = {
  __typename?: 'RootQueryToUserRoleConnection';
  /**
   * Edges for the RootQueryToUserRoleConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<UserRole>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The user login. */
  login?: Maybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The user nicename. */
  nicename?: Maybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Paginate users with offsets */
  offsetPagination?: Maybe<OffsetPagination>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: Maybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum;
  order?: Maybe<OrderEnum>;
};

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Names of available user roles */
export enum UserRoleEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

/** Names of available user roles */
export enum UsersConnectionSearchColumnEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = {
  __typename?: 'RootQueryToUserConnection';
  /**
   * Edges for the RootQueryToUserConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<User>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
  __typename?: 'RootQueryToUserConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings';
  /**
   * Default post category.
   * @deprecated 
   */
  defaultCategory?: Maybe<Scalars['Int']>;
  /**
   * Default post format.
   * @deprecated 
   */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated 
   */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation';
  /**
   * The payload for the UpdateCategory mutation
   * @deprecated 
   */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /**
   * The payload for the UpdatePostFormat mutation
   * @deprecated 
   */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  /**
   * The payload for the UpdateSeries mutation
   * @deprecated 
   */
  updateSeries?: Maybe<UpdateSeriesPayload>;
  /**
   * The payload for the UpdateTag mutation
   * @deprecated 
   */
  updateTag?: Maybe<UpdateTagPayload>;
  /**
   * The payload for the createCaseStudy mutation
   * @deprecated 
   */
  createCaseStudy?: Maybe<CreateCaseStudyPayload>;
  /**
   * The payload for the createCategory mutation
   * @deprecated 
   */
  createCategory?: Maybe<CreateCategoryPayload>;
  /**
   * The payload for the createComment mutation
   * @deprecated 
   */
  createComment?: Maybe<CreateCommentPayload>;
  /**
   * The payload for the createEvent mutation
   * @deprecated 
   */
  createEvent?: Maybe<CreateEventPayload>;
  /**
   * The payload for the createInspiration mutation
   * @deprecated 
   */
  createInspiration?: Maybe<CreateInspirationPayload>;
  /**
   * The payload for the createMediaItem mutation
   * @deprecated 
   */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /**
   * The payload for the createPage mutation
   * @deprecated 
   */
  createPage?: Maybe<CreatePagePayload>;
  /**
   * The payload for the createPost mutation
   * @deprecated 
   */
  createPost?: Maybe<CreatePostPayload>;
  /**
   * The payload for the createPostFormat mutation
   * @deprecated 
   */
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  /**
   * The payload for the createReusableBlock mutation
   * @deprecated 
   */
  createReusableBlock?: Maybe<CreateReusableBlockPayload>;
  /**
   * The payload for the createReview mutation
   * @deprecated 
   */
  createReview?: Maybe<CreateReviewPayload>;
  /**
   * The payload for the createSeries mutation
   * @deprecated 
   */
  createSeries?: Maybe<CreateSeriesPayload>;
  /**
   * The payload for the createTag mutation
   * @deprecated 
   */
  createTag?: Maybe<CreateTagPayload>;
  /**
   * The payload for the createUser mutation
   * @deprecated 
   */
  createUser?: Maybe<CreateUserPayload>;
  /**
   * The payload for the deleteCaseStudy mutation
   * @deprecated 
   */
  deleteCaseStudy?: Maybe<DeleteCaseStudyPayload>;
  /**
   * The payload for the deleteCategory mutation
   * @deprecated 
   */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /**
   * The payload for the deleteComment mutation
   * @deprecated 
   */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /**
   * The payload for the deleteEvent mutation
   * @deprecated 
   */
  deleteEvent?: Maybe<DeleteEventPayload>;
  /**
   * The payload for the deleteInspiration mutation
   * @deprecated 
   */
  deleteInspiration?: Maybe<DeleteInspirationPayload>;
  /**
   * The payload for the deleteMediaItem mutation
   * @deprecated 
   */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /**
   * The payload for the deletePage mutation
   * @deprecated 
   */
  deletePage?: Maybe<DeletePagePayload>;
  /**
   * The payload for the deletePost mutation
   * @deprecated 
   */
  deletePost?: Maybe<DeletePostPayload>;
  /**
   * The payload for the deletePostFormat mutation
   * @deprecated 
   */
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  /**
   * The payload for the deleteReusableBlock mutation
   * @deprecated 
   */
  deleteReusableBlock?: Maybe<DeleteReusableBlockPayload>;
  /**
   * The payload for the deleteReview mutation
   * @deprecated 
   */
  deleteReview?: Maybe<DeleteReviewPayload>;
  /**
   * The payload for the deleteSeries mutation
   * @deprecated 
   */
  deleteSeries?: Maybe<DeleteSeriesPayload>;
  /**
   * The payload for the deleteTag mutation
   * @deprecated 
   */
  deleteTag?: Maybe<DeleteTagPayload>;
  /**
   * The payload for the deleteUser mutation
   * @deprecated 
   */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** @deprecated  */
  increaseCount?: Maybe<Scalars['Int']>;
  /**
   * The payload for the login mutation
   * @deprecated 
   */
  login?: Maybe<LoginPayload>;
  /**
   * The payload for the refreshJwtAuthToken mutation
   * @deprecated 
   */
  refreshJwtAuthToken?: Maybe<RefreshJwtAuthTokenPayload>;
  /**
   * The payload for the registerUser mutation
   * @deprecated 
   */
  registerUser?: Maybe<RegisterUserPayload>;
  /**
   * The payload for the resetUserPassword mutation
   * @deprecated 
   */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /**
   * The payload for the restoreComment mutation
   * @deprecated 
   */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /**
   * The payload for the sendPasswordResetEmail mutation
   * @deprecated 
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /**
   * The payload for the updateCaseStudy mutation
   * @deprecated 
   */
  updateCaseStudy?: Maybe<UpdateCaseStudyPayload>;
  /**
   * The payload for the updateComment mutation
   * @deprecated 
   */
  updateComment?: Maybe<UpdateCommentPayload>;
  /**
   * The payload for the updateEvent mutation
   * @deprecated 
   */
  updateEvent?: Maybe<UpdateEventPayload>;
  /**
   * The payload for the updateInspiration mutation
   * @deprecated 
   */
  updateInspiration?: Maybe<UpdateInspirationPayload>;
  /**
   * The payload for the updateMediaItem mutation
   * @deprecated 
   */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /**
   * The payload for the updatePage mutation
   * @deprecated 
   */
  updatePage?: Maybe<UpdatePagePayload>;
  /**
   * The payload for the updatePost mutation
   * @deprecated 
   */
  updatePost?: Maybe<UpdatePostPayload>;
  /**
   * The payload for the updateReusableBlock mutation
   * @deprecated 
   */
  updateReusableBlock?: Maybe<UpdateReusableBlockPayload>;
  /**
   * The payload for the updateReview mutation
   * @deprecated 
   */
  updateReview?: Maybe<UpdateReviewPayload>;
  /**
   * The payload for the updateSettings mutation
   * @deprecated 
   */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /**
   * The payload for the updateUser mutation
   * @deprecated 
   */
  updateUser?: Maybe<UpdateUserPayload>;
};


/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


/** The root mutation */
export type RootMutationUpdateSeriesArgs = {
  input: UpdateSeriesInput;
};


/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation */
export type RootMutationCreateCaseStudyArgs = {
  input: CreateCaseStudyInput;
};


/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation */
export type RootMutationCreateEventArgs = {
  input: CreateEventInput;
};


/** The root mutation */
export type RootMutationCreateInspirationArgs = {
  input: CreateInspirationInput;
};


/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


/** The root mutation */
export type RootMutationCreateReusableBlockArgs = {
  input: CreateReusableBlockInput;
};


/** The root mutation */
export type RootMutationCreateReviewArgs = {
  input: CreateReviewInput;
};


/** The root mutation */
export type RootMutationCreateSeriesArgs = {
  input: CreateSeriesInput;
};


/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation */
export type RootMutationDeleteCaseStudyArgs = {
  input: DeleteCaseStudyInput;
};


/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation */
export type RootMutationDeleteEventArgs = {
  input: DeleteEventInput;
};


/** The root mutation */
export type RootMutationDeleteInspirationArgs = {
  input: DeleteInspirationInput;
};


/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


/** The root mutation */
export type RootMutationDeleteReusableBlockArgs = {
  input: DeleteReusableBlockInput;
};


/** The root mutation */
export type RootMutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


/** The root mutation */
export type RootMutationDeleteSeriesArgs = {
  input: DeleteSeriesInput;
};


/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: Maybe<Scalars['Int']>;
};


/** The root mutation */
export type RootMutationLoginArgs = {
  input: LoginInput;
};


/** The root mutation */
export type RootMutationRefreshJwtAuthTokenArgs = {
  input: RefreshJwtAuthTokenInput;
};


/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


/** The root mutation */
export type RootMutationUpdateCaseStudyArgs = {
  input: UpdateCaseStudyInput;
};


/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation */
export type RootMutationUpdateEventArgs = {
  input: UpdateEventInput;
};


/** The root mutation */
export type RootMutationUpdateInspirationArgs = {
  input: UpdateInspirationInput;
};


/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation */
export type RootMutationUpdateReusableBlockArgs = {
  input: UpdateReusableBlockInput;
};


/** The root mutation */
export type RootMutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /**
   * The created category
   * @deprecated 
   */
  category?: Maybe<Category>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the UpdatePostFormat mutation */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePostFormat mutation */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_format
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the UpdateSeries mutation */
export type UpdateSeriesInput = {
  /** The slug that the taxonomy_series will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the taxonomy_series object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the Series object to update */
  id: Scalars['ID'];
  /** The name of the taxonomy_series object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the taxonomy_series that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateSeries mutation */
export type UpdateSeriesPayload = {
  __typename?: 'UpdateSeriesPayload';
  /**
   * The created taxonomy_series
   * @deprecated 
   */
  series?: Maybe<Series>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_tag
   * @deprecated 
   */
  tag?: Maybe<Tag>;
};

/** Input for the createCaseStudy mutation */
export type CreateCaseStudyInput = {
  /** Set connections between the CaseStudy and categories */
  categories?: Maybe<CaseStudyCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the CaseStudy and tags */
  tags?: Maybe<CaseStudyTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Set relationships between the CaseStudy to categories */
export type CaseStudyCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<CaseStudyCategoriesNodeInput>>>;
};

/** List of categories to connect the CaseStudy to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type CaseStudyCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the CaseStudy. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the CaseStudy to tags */
export type CaseStudyTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<CaseStudyTagsNodeInput>>>;
};

/** List of tags to connect the CaseStudy to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type CaseStudyTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the CaseStudy. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createCaseStudy mutation */
export type CreateCaseStudyPayload = {
  __typename?: 'CreateCaseStudyPayload';
  /** @deprecated  */
  caseStudy?: Maybe<CaseStudy>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /**
   * The created category
   * @deprecated 
   */
  category?: Maybe<Category>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createComment mutation */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
};

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The comment that was created
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated 
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createEvent mutation */
export type CreateEventInput = {
  /** Set connections between the Event and categories */
  categories?: Maybe<EventCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the Event and tags */
  tags?: Maybe<EventTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Set relationships between the Event to categories */
export type EventCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<EventCategoriesNodeInput>>>;
};

/** List of categories to connect the Event to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type EventCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the Event. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the Event to tags */
export type EventTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<EventTagsNodeInput>>>;
};

/** List of tags to connect the Event to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type EventTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the Event. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createEvent mutation */
export type CreateEventPayload = {
  __typename?: 'CreateEventPayload';
  /** @deprecated  */
  event?: Maybe<Event>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createInspiration mutation */
export type CreateInspirationInput = {
  /** Set connections between the Inspiration and categories */
  categories?: Maybe<InspirationCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the Inspiration and tags */
  tags?: Maybe<InspirationTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Set relationships between the Inspiration to categories */
export type InspirationCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<InspirationCategoriesNodeInput>>>;
};

/** List of categories to connect the Inspiration to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type InspirationCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the Inspiration. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the Inspiration to tags */
export type InspirationTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<InspirationTagsNodeInput>>>;
};

/** List of tags to connect the Inspiration to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type InspirationTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the Inspiration. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createInspiration mutation */
export type CreateInspirationPayload = {
  __typename?: 'CreateInspirationPayload';
  /** @deprecated  */
  inspiration?: Maybe<Inspiration>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the createPage mutation */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  page?: Maybe<Page>;
};

/** Input for the createPost mutation */
export type CreatePostInput = {
  /** Set connections between the post and Serieses */
  serieses?: Maybe<PostSeriesesInput>;
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the post to Serieses */
export type PostSeriesesInput = {
  /** If true, this will append the Series to existing related Serieses. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostSeriesesNodeInput>>>;
};

/** List of Serieses to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostSeriesesNodeInput = {
  /** The description of the Series. This field is used to set a description of the Series if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the Series. If present, this will be used to connect to the post. If no existing Series exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the Series. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the Series. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPost mutation */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  post?: Maybe<Post>;
};

/** Input for the createPostFormat mutation */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_format
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the createReusableBlock mutation */
export type CreateReusableBlockInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the createReusableBlock mutation */
export type CreateReusableBlockPayload = {
  __typename?: 'CreateReusableBlockPayload';
  /** @deprecated  */
  reusableBlock?: Maybe<ReusableBlock>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createReview mutation */
export type CreateReviewInput = {
  /** Set connections between the Review and categories */
  categories?: Maybe<ReviewCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the Review and tags */
  tags?: Maybe<ReviewTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Set relationships between the Review to categories */
export type ReviewCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<ReviewCategoriesNodeInput>>>;
};

/** List of categories to connect the Review to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ReviewCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the Review. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the Review to tags */
export type ReviewTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<ReviewTagsNodeInput>>>;
};

/** List of tags to connect the Review to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ReviewTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the Review. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createReview mutation */
export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload';
  /** @deprecated  */
  review?: Maybe<Review>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createSeries mutation */
export type CreateSeriesInput = {
  /** The slug that the taxonomy_series will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the taxonomy_series object */
  description?: Maybe<Scalars['String']>;
  /** The name of the taxonomy_series object to mutate */
  name: Scalars['String'];
  /** The ID of the taxonomy_series that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createSeries mutation */
export type CreateSeriesPayload = {
  __typename?: 'CreateSeriesPayload';
  /**
   * The created taxonomy_series
   * @deprecated 
   */
  series?: Maybe<Series>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createTag mutation */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_tag
   * @deprecated 
   */
  tag?: Maybe<Tag>;
};

/** Input for the createUser mutation */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** If true, this will refresh the users JWT secret. */
  refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
  revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** Input for the deleteCaseStudy mutation */
export type DeleteCaseStudyInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the CaseStudy to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCaseStudy mutation */
export type DeleteCaseStudyPayload = {
  __typename?: 'DeleteCaseStudyPayload';
  /**
   * The object before it was deleted
   * @deprecated 
   */
  caseStudy?: Maybe<CaseStudy>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /**
   * The deteted term object
   * @deprecated 
   */
  category?: Maybe<Category>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The deleted comment object
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * The deleted comment ID
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteEvent mutation */
export type DeleteEventInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the Event to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteEvent mutation */
export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload';
  /**
   * The object before it was deleted
   * @deprecated 
   */
  event?: Maybe<Event>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteInspiration mutation */
export type DeleteInspirationInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the Inspiration to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteInspiration mutation */
export type DeleteInspirationPayload = {
  __typename?: 'DeleteInspirationPayload';
  /**
   * The object before it was deleted
   * @deprecated 
   */
  inspiration?: Maybe<Inspiration>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted mediaItem
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The mediaItem before it was deleted
   * @deprecated 
   */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation */
export type DeletePageInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The object before it was deleted
   * @deprecated 
   */
  page?: Maybe<Page>;
};

/** Input for the deletePost mutation */
export type DeletePostInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The object before it was deleted
   * @deprecated 
   */
  post?: Maybe<Post>;
};

/** Input for the deletePostFormat mutation */
export type DeletePostFormatInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the deleteReusableBlock mutation */
export type DeleteReusableBlockInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the ReusableBlock to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteReusableBlock mutation */
export type DeleteReusableBlockPayload = {
  __typename?: 'DeleteReusableBlockPayload';
  /**
   * The object before it was deleted
   * @deprecated 
   */
  reusableBlock?: Maybe<ReusableBlock>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteReview mutation */
export type DeleteReviewInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the Review to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteReview mutation */
export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  /**
   * The object before it was deleted
   * @deprecated 
   */
  review?: Maybe<Review>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteSeries mutation */
export type DeleteSeriesInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the Series to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteSeries mutation */
export type DeleteSeriesPayload = {
  __typename?: 'DeleteSeriesPayload';
  /**
   * The deteted term object
   * @deprecated 
   */
  series?: Maybe<Series>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  tag?: Maybe<Tag>;
};

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the user that you just deleted
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deleted user object
   * @deprecated 
   */
  user?: Maybe<User>;
};

/** Input for the login mutation */
export type LoginInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The plain-text password for the user logging in. */
  password: Scalars['String'];
  /** The username used for login. Typically a unique or email address depending on specific configuration */
  username: Scalars['String'];
};

/** The payload for the login mutation */
export type LoginPayload = {
  __typename?: 'LoginPayload';
  /**
   * JWT Token that can be used in future requests for Authentication
   * @deprecated 
   */
  authToken?: Maybe<Scalars['String']>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
   * @deprecated 
   */
  refreshToken?: Maybe<Scalars['String']>;
  /**
   * The user that was logged in
   * @deprecated 
   */
  user?: Maybe<User>;
};

/** Input for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** A valid, previously issued JWT refresh token. If valid a new Auth token will be provided. If invalid, expired, revoked or otherwise invalid, a new AuthToken will not be provided. */
  jwtRefreshToken: Scalars['String'];
};

/** The payload for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenPayload = {
  __typename?: 'RefreshJwtAuthTokenPayload';
  /**
   * JWT Token that can be used in future requests for Authentication
   * @deprecated 
   */
  authToken?: Maybe<Scalars['String']>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the registerUser mutation */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** If true, this will refresh the users JWT secret. */
  refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
  revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Password reset key */
  key?: Maybe<Scalars['String']>;
  /** The user's login (username). */
  login?: Maybe<Scalars['String']>;
  /** The new password. */
  password?: Maybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The restored comment object
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * The ID of the restored comment
   * @deprecated 
   */
  restoredId?: Maybe<Scalars['ID']>;
};

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated 
   */
  user?: Maybe<User>;
};

/** Input for the updateCaseStudy mutation */
export type UpdateCaseStudyInput = {
  /** Set connections between the CaseStudy and categories */
  categories?: Maybe<CaseStudyCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the CaseStudy object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the CaseStudy and tags */
  tags?: Maybe<CaseStudyTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateCaseStudy mutation */
export type UpdateCaseStudyPayload = {
  __typename?: 'UpdateCaseStudyPayload';
  /** @deprecated  */
  caseStudy?: Maybe<CaseStudy>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
};

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The comment that was created
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated 
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateEvent mutation */
export type UpdateEventInput = {
  /** Set connections between the Event and categories */
  categories?: Maybe<EventCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the Event object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the Event and tags */
  tags?: Maybe<EventTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateEvent mutation */
export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload';
  /** @deprecated  */
  event?: Maybe<Event>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateInspiration mutation */
export type UpdateInspirationInput = {
  /** Set connections between the Inspiration and categories */
  categories?: Maybe<InspirationCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the Inspiration object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the Inspiration and tags */
  tags?: Maybe<InspirationTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateInspiration mutation */
export type UpdateInspirationPayload = {
  __typename?: 'UpdateInspirationPayload';
  /** @deprecated  */
  inspiration?: Maybe<Inspiration>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  page?: Maybe<Page>;
};

/** Input for the updatePost mutation */
export type UpdatePostInput = {
  /** Set connections between the post and Serieses */
  serieses?: Maybe<PostSeriesesInput>;
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  post?: Maybe<Post>;
};

/** Input for the updateReusableBlock mutation */
export type UpdateReusableBlockInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the ReusableBlock object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateReusableBlock mutation */
export type UpdateReusableBlockPayload = {
  __typename?: 'UpdateReusableBlockPayload';
  /** @deprecated  */
  reusableBlock?: Maybe<ReusableBlock>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateReview mutation */
export type UpdateReviewInput = {
  /** Set connections between the Review and categories */
  categories?: Maybe<ReviewCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the Review object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the Review and tags */
  tags?: Maybe<ReviewTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateReview mutation */
export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  /** @deprecated  */
  review?: Maybe<Review>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Site title. */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Site URL. */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Default post category. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  /** @deprecated  */
  allSettings?: Maybe<Settings>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>;
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>;
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateUser mutation */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** If true, this will refresh the users JWT secret. */
  refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
  revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** A Comment Author object */
export type CommentAuthor = Node & Commenter & {
  __typename?: 'CommentAuthor';
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The email for the comment author
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the comment author object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The name for the comment author.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url the comment author.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};

/** Available timezones */
export enum TimezoneEnum {
  /** Abidjan */
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  /** Accra */
  AfricaAccra = 'AFRICA_ACCRA',
  /** Addis Ababa */
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  /** Algiers */
  AfricaAlgiers = 'AFRICA_ALGIERS',
  /** Asmara */
  AfricaAsmara = 'AFRICA_ASMARA',
  /** Bamako */
  AfricaBamako = 'AFRICA_BAMAKO',
  /** Bangui */
  AfricaBangui = 'AFRICA_BANGUI',
  /** Banjul */
  AfricaBanjul = 'AFRICA_BANJUL',
  /** Bissau */
  AfricaBissau = 'AFRICA_BISSAU',
  /** Blantyre */
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  /** Brazzaville */
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  /** Bujumbura */
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  /** Cairo */
  AfricaCairo = 'AFRICA_CAIRO',
  /** Casablanca */
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  /** Ceuta */
  AfricaCeuta = 'AFRICA_CEUTA',
  /** Conakry */
  AfricaConakry = 'AFRICA_CONAKRY',
  /** Dakar */
  AfricaDakar = 'AFRICA_DAKAR',
  /** Dar es Salaam */
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  /** Djibouti */
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  /** Douala */
  AfricaDouala = 'AFRICA_DOUALA',
  /** El Aaiun */
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  /** Freetown */
  AfricaFreetown = 'AFRICA_FREETOWN',
  /** Gaborone */
  AfricaGaborone = 'AFRICA_GABORONE',
  /** Harare */
  AfricaHarare = 'AFRICA_HARARE',
  /** Johannesburg */
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  /** Juba */
  AfricaJuba = 'AFRICA_JUBA',
  /** Kampala */
  AfricaKampala = 'AFRICA_KAMPALA',
  /** Khartoum */
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  /** Kigali */
  AfricaKigali = 'AFRICA_KIGALI',
  /** Kinshasa */
  AfricaKinshasa = 'AFRICA_KINSHASA',
  /** Lagos */
  AfricaLagos = 'AFRICA_LAGOS',
  /** Libreville */
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  /** Lome */
  AfricaLome = 'AFRICA_LOME',
  /** Luanda */
  AfricaLuanda = 'AFRICA_LUANDA',
  /** Lubumbashi */
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  /** Lusaka */
  AfricaLusaka = 'AFRICA_LUSAKA',
  /** Malabo */
  AfricaMalabo = 'AFRICA_MALABO',
  /** Maputo */
  AfricaMaputo = 'AFRICA_MAPUTO',
  /** Maseru */
  AfricaMaseru = 'AFRICA_MASERU',
  /** Mbabane */
  AfricaMbabane = 'AFRICA_MBABANE',
  /** Mogadishu */
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  /** Monrovia */
  AfricaMonrovia = 'AFRICA_MONROVIA',
  /** Nairobi */
  AfricaNairobi = 'AFRICA_NAIROBI',
  /** Ndjamena */
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  /** Niamey */
  AfricaNiamey = 'AFRICA_NIAMEY',
  /** Nouakchott */
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  /** Ouagadougou */
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  /** Porto-Novo */
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  /** Sao Tome */
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  /** Tripoli */
  AfricaTripoli = 'AFRICA_TRIPOLI',
  /** Tunis */
  AfricaTunis = 'AFRICA_TUNIS',
  /** Windhoek */
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  /** Adak */
  AmericaAdak = 'AMERICA_ADAK',
  /** Anchorage */
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  /** Anguilla */
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  /** Antigua */
  AmericaAntigua = 'AMERICA_ANTIGUA',
  /** Araguaina */
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  /** Argentina - Buenos Aires */
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  /** Argentina - Catamarca */
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  /** Argentina - Cordoba */
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  /** Argentina - Jujuy */
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  /** Argentina - La Rioja */
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  /** Argentina - Mendoza */
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  /** Argentina - Rio Gallegos */
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  /** Argentina - Salta */
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  /** Argentina - San Juan */
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  /** Argentina - San Luis */
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  /** Argentina - Tucuman */
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  /** Argentina - Ushuaia */
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  /** Aruba */
  AmericaAruba = 'AMERICA_ARUBA',
  /** Asuncion */
  AmericaAsuncion = 'AMERICA_ASUNCION',
  /** Atikokan */
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  /** Bahia */
  AmericaBahia = 'AMERICA_BAHIA',
  /** Bahia Banderas */
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  /** Barbados */
  AmericaBarbados = 'AMERICA_BARBADOS',
  /** Belem */
  AmericaBelem = 'AMERICA_BELEM',
  /** Belize */
  AmericaBelize = 'AMERICA_BELIZE',
  /** Blanc-Sablon */
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  /** Boa Vista */
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  /** Bogota */
  AmericaBogota = 'AMERICA_BOGOTA',
  /** Boise */
  AmericaBoise = 'AMERICA_BOISE',
  /** Cambridge Bay */
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  /** Campo Grande */
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  /** Cancun */
  AmericaCancun = 'AMERICA_CANCUN',
  /** Caracas */
  AmericaCaracas = 'AMERICA_CARACAS',
  /** Cayenne */
  AmericaCayenne = 'AMERICA_CAYENNE',
  /** Cayman */
  AmericaCayman = 'AMERICA_CAYMAN',
  /** Chicago */
  AmericaChicago = 'AMERICA_CHICAGO',
  /** Chihuahua */
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  /** Costa Rica */
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  /** Creston */
  AmericaCreston = 'AMERICA_CRESTON',
  /** Cuiaba */
  AmericaCuiaba = 'AMERICA_CUIABA',
  /** Curacao */
  AmericaCuracao = 'AMERICA_CURACAO',
  /** Danmarkshavn */
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  /** Dawson */
  AmericaDawson = 'AMERICA_DAWSON',
  /** Dawson Creek */
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  /** Denver */
  AmericaDenver = 'AMERICA_DENVER',
  /** Detroit */
  AmericaDetroit = 'AMERICA_DETROIT',
  /** Dominica */
  AmericaDominica = 'AMERICA_DOMINICA',
  /** Edmonton */
  AmericaEdmonton = 'AMERICA_EDMONTON',
  /** Eirunepe */
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  /** El Salvador */
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  /** Fortaleza */
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  /** Fort Nelson */
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  /** Glace Bay */
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  /** Godthab */
  AmericaGodthab = 'AMERICA_GODTHAB',
  /** Goose Bay */
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  /** Grand Turk */
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  /** Grenada */
  AmericaGrenada = 'AMERICA_GRENADA',
  /** Guadeloupe */
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  /** Guatemala */
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  /** Guayaquil */
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  /** Guyana */
  AmericaGuyana = 'AMERICA_GUYANA',
  /** Halifax */
  AmericaHalifax = 'AMERICA_HALIFAX',
  /** Havana */
  AmericaHavana = 'AMERICA_HAVANA',
  /** Hermosillo */
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  /** Indiana - Indianapolis */
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  /** Indiana - Knox */
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  /** Indiana - Marengo */
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  /** Indiana - Petersburg */
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  /** Indiana - Tell City */
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  /** Indiana - Vevay */
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  /** Indiana - Vincennes */
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  /** Indiana - Winamac */
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  /** Inuvik */
  AmericaInuvik = 'AMERICA_INUVIK',
  /** Iqaluit */
  AmericaIqaluit = 'AMERICA_IQALUIT',
  /** Jamaica */
  AmericaJamaica = 'AMERICA_JAMAICA',
  /** Juneau */
  AmericaJuneau = 'AMERICA_JUNEAU',
  /** Kentucky - Louisville */
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  /** Kentucky - Monticello */
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  /** Kralendijk */
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  /** La Paz */
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  /** Lima */
  AmericaLima = 'AMERICA_LIMA',
  /** Los Angeles */
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  /** Lower Princes */
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  /** Maceio */
  AmericaMaceio = 'AMERICA_MACEIO',
  /** Managua */
  AmericaManagua = 'AMERICA_MANAGUA',
  /** Manaus */
  AmericaManaus = 'AMERICA_MANAUS',
  /** Marigot */
  AmericaMarigot = 'AMERICA_MARIGOT',
  /** Martinique */
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  /** Matamoros */
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  /** Mazatlan */
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  /** Menominee */
  AmericaMenominee = 'AMERICA_MENOMINEE',
  /** Merida */
  AmericaMerida = 'AMERICA_MERIDA',
  /** Metlakatla */
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  /** Mexico City */
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  /** Miquelon */
  AmericaMiquelon = 'AMERICA_MIQUELON',
  /** Moncton */
  AmericaMoncton = 'AMERICA_MONCTON',
  /** Monterrey */
  AmericaMonterrey = 'AMERICA_MONTERREY',
  /** Montevideo */
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  /** Montserrat */
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  /** Nassau */
  AmericaNassau = 'AMERICA_NASSAU',
  /** New York */
  AmericaNewYork = 'AMERICA_NEW_YORK',
  /** Nipigon */
  AmericaNipigon = 'AMERICA_NIPIGON',
  /** Nome */
  AmericaNome = 'AMERICA_NOME',
  /** Noronha */
  AmericaNoronha = 'AMERICA_NORONHA',
  /** North Dakota - Beulah */
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  /** North Dakota - Center */
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  /** North Dakota - New Salem */
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  /** Ojinaga */
  AmericaOjinaga = 'AMERICA_OJINAGA',
  /** Panama */
  AmericaPanama = 'AMERICA_PANAMA',
  /** Pangnirtung */
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  /** Paramaribo */
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  /** Phoenix */
  AmericaPhoenix = 'AMERICA_PHOENIX',
  /** Porto Velho */
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  /** Port-au-Prince */
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  /** Port of Spain */
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  /** Puerto Rico */
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  /** Punta Arenas */
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  /** Rainy River */
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  /** Rankin Inlet */
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  /** Recife */
  AmericaRecife = 'AMERICA_RECIFE',
  /** Regina */
  AmericaRegina = 'AMERICA_REGINA',
  /** Resolute */
  AmericaResolute = 'AMERICA_RESOLUTE',
  /** Rio Branco */
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  /** Santarem */
  AmericaSantarem = 'AMERICA_SANTAREM',
  /** Santiago */
  AmericaSantiago = 'AMERICA_SANTIAGO',
  /** Santo Domingo */
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  /** Sao Paulo */
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  /** Scoresbysund */
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  /** Sitka */
  AmericaSitka = 'AMERICA_SITKA',
  /** St Barthelemy */
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  /** St Johns */
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  /** St Kitts */
  AmericaStKitts = 'AMERICA_ST_KITTS',
  /** St Lucia */
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  /** St Thomas */
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  /** St Vincent */
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  /** Swift Current */
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  /** Tegucigalpa */
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  /** Thule */
  AmericaThule = 'AMERICA_THULE',
  /** Thunder Bay */
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  /** Tijuana */
  AmericaTijuana = 'AMERICA_TIJUANA',
  /** Toronto */
  AmericaToronto = 'AMERICA_TORONTO',
  /** Tortola */
  AmericaTortola = 'AMERICA_TORTOLA',
  /** Vancouver */
  AmericaVancouver = 'AMERICA_VANCOUVER',
  /** Whitehorse */
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  /** Winnipeg */
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  /** Yakutat */
  AmericaYakutat = 'AMERICA_YAKUTAT',
  /** Yellowknife */
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  /** Casey */
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  /** Davis */
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  /** DumontDUrville */
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  /** Macquarie */
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  /** Mawson */
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  /** McMurdo */
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  /** Palmer */
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  /** Rothera */
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  /** Syowa */
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  /** Troll */
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  /** Vostok */
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  /** Longyearbyen */
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  /** Aden */
  AsiaAden = 'ASIA_ADEN',
  /** Almaty */
  AsiaAlmaty = 'ASIA_ALMATY',
  /** Amman */
  AsiaAmman = 'ASIA_AMMAN',
  /** Anadyr */
  AsiaAnadyr = 'ASIA_ANADYR',
  /** Aqtau */
  AsiaAqtau = 'ASIA_AQTAU',
  /** Aqtobe */
  AsiaAqtobe = 'ASIA_AQTOBE',
  /** Ashgabat */
  AsiaAshgabat = 'ASIA_ASHGABAT',
  /** Atyrau */
  AsiaAtyrau = 'ASIA_ATYRAU',
  /** Baghdad */
  AsiaBaghdad = 'ASIA_BAGHDAD',
  /** Bahrain */
  AsiaBahrain = 'ASIA_BAHRAIN',
  /** Baku */
  AsiaBaku = 'ASIA_BAKU',
  /** Bangkok */
  AsiaBangkok = 'ASIA_BANGKOK',
  /** Barnaul */
  AsiaBarnaul = 'ASIA_BARNAUL',
  /** Beirut */
  AsiaBeirut = 'ASIA_BEIRUT',
  /** Bishkek */
  AsiaBishkek = 'ASIA_BISHKEK',
  /** Brunei */
  AsiaBrunei = 'ASIA_BRUNEI',
  /** Chita */
  AsiaChita = 'ASIA_CHITA',
  /** Choibalsan */
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  /** Colombo */
  AsiaColombo = 'ASIA_COLOMBO',
  /** Damascus */
  AsiaDamascus = 'ASIA_DAMASCUS',
  /** Dhaka */
  AsiaDhaka = 'ASIA_DHAKA',
  /** Dili */
  AsiaDili = 'ASIA_DILI',
  /** Dubai */
  AsiaDubai = 'ASIA_DUBAI',
  /** Dushanbe */
  AsiaDushanbe = 'ASIA_DUSHANBE',
  /** Famagusta */
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  /** Gaza */
  AsiaGaza = 'ASIA_GAZA',
  /** Hebron */
  AsiaHebron = 'ASIA_HEBRON',
  /** Hong Kong */
  AsiaHongKong = 'ASIA_HONG_KONG',
  /** Hovd */
  AsiaHovd = 'ASIA_HOVD',
  /** Ho Chi Minh */
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  /** Irkutsk */
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  /** Jakarta */
  AsiaJakarta = 'ASIA_JAKARTA',
  /** Jayapura */
  AsiaJayapura = 'ASIA_JAYAPURA',
  /** Jerusalem */
  AsiaJerusalem = 'ASIA_JERUSALEM',
  /** Kabul */
  AsiaKabul = 'ASIA_KABUL',
  /** Kamchatka */
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  /** Karachi */
  AsiaKarachi = 'ASIA_KARACHI',
  /** Kathmandu */
  AsiaKathmandu = 'ASIA_KATHMANDU',
  /** Khandyga */
  AsiaKhandyga = 'ASIA_KHANDYGA',
  /** Kolkata */
  AsiaKolkata = 'ASIA_KOLKATA',
  /** Krasnoyarsk */
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  /** Kuala Lumpur */
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  /** Kuching */
  AsiaKuching = 'ASIA_KUCHING',
  /** Kuwait */
  AsiaKuwait = 'ASIA_KUWAIT',
  /** Macau */
  AsiaMacau = 'ASIA_MACAU',
  /** Magadan */
  AsiaMagadan = 'ASIA_MAGADAN',
  /** Makassar */
  AsiaMakassar = 'ASIA_MAKASSAR',
  /** Manila */
  AsiaManila = 'ASIA_MANILA',
  /** Muscat */
  AsiaMuscat = 'ASIA_MUSCAT',
  /** Nicosia */
  AsiaNicosia = 'ASIA_NICOSIA',
  /** Novokuznetsk */
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  /** Novosibirsk */
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  /** Omsk */
  AsiaOmsk = 'ASIA_OMSK',
  /** Oral */
  AsiaOral = 'ASIA_ORAL',
  /** Phnom Penh */
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  /** Pontianak */
  AsiaPontianak = 'ASIA_PONTIANAK',
  /** Pyongyang */
  AsiaPyongyang = 'ASIA_PYONGYANG',
  /** Qatar */
  AsiaQatar = 'ASIA_QATAR',
  /** Qostanay */
  AsiaQostanay = 'ASIA_QOSTANAY',
  /** Qyzylorda */
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  /** Riyadh */
  AsiaRiyadh = 'ASIA_RIYADH',
  /** Sakhalin */
  AsiaSakhalin = 'ASIA_SAKHALIN',
  /** Samarkand */
  AsiaSamarkand = 'ASIA_SAMARKAND',
  /** Seoul */
  AsiaSeoul = 'ASIA_SEOUL',
  /** Shanghai */
  AsiaShanghai = 'ASIA_SHANGHAI',
  /** Singapore */
  AsiaSingapore = 'ASIA_SINGAPORE',
  /** Srednekolymsk */
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  /** Taipei */
  AsiaTaipei = 'ASIA_TAIPEI',
  /** Tashkent */
  AsiaTashkent = 'ASIA_TASHKENT',
  /** Tbilisi */
  AsiaTbilisi = 'ASIA_TBILISI',
  /** Tehran */
  AsiaTehran = 'ASIA_TEHRAN',
  /** Thimphu */
  AsiaThimphu = 'ASIA_THIMPHU',
  /** Tokyo */
  AsiaTokyo = 'ASIA_TOKYO',
  /** Tomsk */
  AsiaTomsk = 'ASIA_TOMSK',
  /** Ulaanbaatar */
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  /** Urumqi */
  AsiaUrumqi = 'ASIA_URUMQI',
  /** Ust-Nera */
  AsiaUstNera = 'ASIA_UST_NERA',
  /** Vientiane */
  AsiaVientiane = 'ASIA_VIENTIANE',
  /** Vladivostok */
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  /** Yakutsk */
  AsiaYakutsk = 'ASIA_YAKUTSK',
  /** Yangon */
  AsiaYangon = 'ASIA_YANGON',
  /** Yekaterinburg */
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  /** Yerevan */
  AsiaYerevan = 'ASIA_YEREVAN',
  /** Azores */
  AtlanticAzores = 'ATLANTIC_AZORES',
  /** Bermuda */
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  /** Canary */
  AtlanticCanary = 'ATLANTIC_CANARY',
  /** Cape Verde */
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  /** Faroe */
  AtlanticFaroe = 'ATLANTIC_FAROE',
  /** Madeira */
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  /** Reykjavik */
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  /** South Georgia */
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  /** Stanley */
  AtlanticStanley = 'ATLANTIC_STANLEY',
  /** St Helena */
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  /** Adelaide */
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  /** Brisbane */
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  /** Broken Hill */
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  /** Currie */
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  /** Darwin */
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  /** Eucla */
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  /** Hobart */
  AustraliaHobart = 'AUSTRALIA_HOBART',
  /** Lindeman */
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  /** Lord Howe */
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  /** Melbourne */
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  /** Perth */
  AustraliaPerth = 'AUSTRALIA_PERTH',
  /** Sydney */
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  /** Amsterdam */
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  /** Andorra */
  EuropeAndorra = 'EUROPE_ANDORRA',
  /** Astrakhan */
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  /** Athens */
  EuropeAthens = 'EUROPE_ATHENS',
  /** Belgrade */
  EuropeBelgrade = 'EUROPE_BELGRADE',
  /** Berlin */
  EuropeBerlin = 'EUROPE_BERLIN',
  /** Bratislava */
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  /** Brussels */
  EuropeBrussels = 'EUROPE_BRUSSELS',
  /** Bucharest */
  EuropeBucharest = 'EUROPE_BUCHAREST',
  /** Budapest */
  EuropeBudapest = 'EUROPE_BUDAPEST',
  /** Busingen */
  EuropeBusingen = 'EUROPE_BUSINGEN',
  /** Chisinau */
  EuropeChisinau = 'EUROPE_CHISINAU',
  /** Copenhagen */
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  /** Dublin */
  EuropeDublin = 'EUROPE_DUBLIN',
  /** Gibraltar */
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  /** Guernsey */
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  /** Helsinki */
  EuropeHelsinki = 'EUROPE_HELSINKI',
  /** Isle of Man */
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  /** Istanbul */
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  /** Jersey */
  EuropeJersey = 'EUROPE_JERSEY',
  /** Kaliningrad */
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  /** Kiev */
  EuropeKiev = 'EUROPE_KIEV',
  /** Kirov */
  EuropeKirov = 'EUROPE_KIROV',
  /** Lisbon */
  EuropeLisbon = 'EUROPE_LISBON',
  /** Ljubljana */
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  /** London */
  EuropeLondon = 'EUROPE_LONDON',
  /** Luxembourg */
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  /** Madrid */
  EuropeMadrid = 'EUROPE_MADRID',
  /** Malta */
  EuropeMalta = 'EUROPE_MALTA',
  /** Mariehamn */
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  /** Minsk */
  EuropeMinsk = 'EUROPE_MINSK',
  /** Monaco */
  EuropeMonaco = 'EUROPE_MONACO',
  /** Moscow */
  EuropeMoscow = 'EUROPE_MOSCOW',
  /** Oslo */
  EuropeOslo = 'EUROPE_OSLO',
  /** Paris */
  EuropeParis = 'EUROPE_PARIS',
  /** Podgorica */
  EuropePodgorica = 'EUROPE_PODGORICA',
  /** Prague */
  EuropePrague = 'EUROPE_PRAGUE',
  /** Riga */
  EuropeRiga = 'EUROPE_RIGA',
  /** Rome */
  EuropeRome = 'EUROPE_ROME',
  /** Samara */
  EuropeSamara = 'EUROPE_SAMARA',
  /** San Marino */
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  /** Sarajevo */
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  /** Saratov */
  EuropeSaratov = 'EUROPE_SARATOV',
  /** Simferopol */
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  /** Skopje */
  EuropeSkopje = 'EUROPE_SKOPJE',
  /** Sofia */
  EuropeSofia = 'EUROPE_SOFIA',
  /** Stockholm */
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  /** Tallinn */
  EuropeTallinn = 'EUROPE_TALLINN',
  /** Tirane */
  EuropeTirane = 'EUROPE_TIRANE',
  /** Ulyanovsk */
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  /** Uzhgorod */
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  /** Vaduz */
  EuropeVaduz = 'EUROPE_VADUZ',
  /** Vatican */
  EuropeVatican = 'EUROPE_VATICAN',
  /** Vienna */
  EuropeVienna = 'EUROPE_VIENNA',
  /** Vilnius */
  EuropeVilnius = 'EUROPE_VILNIUS',
  /** Volgograd */
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  /** Warsaw */
  EuropeWarsaw = 'EUROPE_WARSAW',
  /** Zagreb */
  EuropeZagreb = 'EUROPE_ZAGREB',
  /** Zaporozhye */
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  /** Zurich */
  EuropeZurich = 'EUROPE_ZURICH',
  /** Antananarivo */
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  /** Chagos */
  IndianChagos = 'INDIAN_CHAGOS',
  /** Christmas */
  IndianChristmas = 'INDIAN_CHRISTMAS',
  /** Cocos */
  IndianCocos = 'INDIAN_COCOS',
  /** Comoro */
  IndianComoro = 'INDIAN_COMORO',
  /** Kerguelen */
  IndianKerguelen = 'INDIAN_KERGUELEN',
  /** Mahe */
  IndianMahe = 'INDIAN_MAHE',
  /** Maldives */
  IndianMaldives = 'INDIAN_MALDIVES',
  /** Mauritius */
  IndianMauritius = 'INDIAN_MAURITIUS',
  /** Mayotte */
  IndianMayotte = 'INDIAN_MAYOTTE',
  /** Reunion */
  IndianReunion = 'INDIAN_REUNION',
  /** Apia */
  PacificApia = 'PACIFIC_APIA',
  /** Auckland */
  PacificAuckland = 'PACIFIC_AUCKLAND',
  /** Bougainville */
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  /** Chatham */
  PacificChatham = 'PACIFIC_CHATHAM',
  /** Chuuk */
  PacificChuuk = 'PACIFIC_CHUUK',
  /** Easter */
  PacificEaster = 'PACIFIC_EASTER',
  /** Efate */
  PacificEfate = 'PACIFIC_EFATE',
  /** Enderbury */
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  /** Fakaofo */
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  /** Fiji */
  PacificFiji = 'PACIFIC_FIJI',
  /** Funafuti */
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  /** Galapagos */
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  /** Gambier */
  PacificGambier = 'PACIFIC_GAMBIER',
  /** Guadalcanal */
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  /** Guam */
  PacificGuam = 'PACIFIC_GUAM',
  /** Honolulu */
  PacificHonolulu = 'PACIFIC_HONOLULU',
  /** Kiritimati */
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  /** Kosrae */
  PacificKosrae = 'PACIFIC_KOSRAE',
  /** Kwajalein */
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  /** Majuro */
  PacificMajuro = 'PACIFIC_MAJURO',
  /** Marquesas */
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  /** Midway */
  PacificMidway = 'PACIFIC_MIDWAY',
  /** Nauru */
  PacificNauru = 'PACIFIC_NAURU',
  /** Niue */
  PacificNiue = 'PACIFIC_NIUE',
  /** Norfolk */
  PacificNorfolk = 'PACIFIC_NORFOLK',
  /** Noumea */
  PacificNoumea = 'PACIFIC_NOUMEA',
  /** Pago Pago */
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  /** Palau */
  PacificPalau = 'PACIFIC_PALAU',
  /** Pitcairn */
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  /** Pohnpei */
  PacificPohnpei = 'PACIFIC_POHNPEI',
  /** Port Moresby */
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  /** Rarotonga */
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  /** Saipan */
  PacificSaipan = 'PACIFIC_SAIPAN',
  /** Tahiti */
  PacificTahiti = 'PACIFIC_TAHITI',
  /** Tarawa */
  PacificTarawa = 'PACIFIC_TARAWA',
  /** Tongatapu */
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  /** Wake */
  PacificWake = 'PACIFIC_WAKE',
  /** Wallis */
  PacificWallis = 'PACIFIC_WALLIS',
  /** UTC offset: UTC+0 */
  Utc_0 = 'UTC_0',
  /** UTC offset: UTC+0:30 */
  Utc_0_30 = 'UTC_0_30',
  /** UTC offset: UTC+1 */
  Utc_1 = 'UTC_1',
  /** UTC offset: UTC+10 */
  Utc_10 = 'UTC_10',
  /** UTC offset: UTC+10:30 */
  Utc_10_30 = 'UTC_10_30',
  /** UTC offset: UTC+11 */
  Utc_11 = 'UTC_11',
  /** UTC offset: UTC+11:30 */
  Utc_11_30 = 'UTC_11_30',
  /** UTC offset: UTC+12 */
  Utc_12 = 'UTC_12',
  /** UTC offset: UTC+12:45 */
  Utc_12_45 = 'UTC_12_45',
  /** UTC offset: UTC+13 */
  Utc_13 = 'UTC_13',
  /** UTC offset: UTC+13:45 */
  Utc_13_45 = 'UTC_13_45',
  /** UTC offset: UTC+14 */
  Utc_14 = 'UTC_14',
  /** UTC offset: UTC+1:30 */
  Utc_1_30 = 'UTC_1_30',
  /** UTC offset: UTC+2 */
  Utc_2 = 'UTC_2',
  /** UTC offset: UTC+2:30 */
  Utc_2_30 = 'UTC_2_30',
  /** UTC offset: UTC+3 */
  Utc_3 = 'UTC_3',
  /** UTC offset: UTC+3:30 */
  Utc_3_30 = 'UTC_3_30',
  /** UTC offset: UTC+4 */
  Utc_4 = 'UTC_4',
  /** UTC offset: UTC+4:30 */
  Utc_4_30 = 'UTC_4_30',
  /** UTC offset: UTC+5 */
  Utc_5 = 'UTC_5',
  /** UTC offset: UTC+5:30 */
  Utc_5_30 = 'UTC_5_30',
  /** UTC offset: UTC+5:45 */
  Utc_5_45 = 'UTC_5_45',
  /** UTC offset: UTC+6 */
  Utc_6 = 'UTC_6',
  /** UTC offset: UTC+6:30 */
  Utc_6_30 = 'UTC_6_30',
  /** UTC offset: UTC+7 */
  Utc_7 = 'UTC_7',
  /** UTC offset: UTC+7:30 */
  Utc_7_30 = 'UTC_7_30',
  /** UTC offset: UTC+8 */
  Utc_8 = 'UTC_8',
  /** UTC offset: UTC+8:30 */
  Utc_8_30 = 'UTC_8_30',
  /** UTC offset: UTC+8:45 */
  Utc_8_45 = 'UTC_8_45',
  /** UTC offset: UTC+9 */
  Utc_9 = 'UTC_9',
  /** UTC offset: UTC+9:30 */
  Utc_9_30 = 'UTC_9_30'
}

/** Options for filtering the connection */
export type MenuItemsWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
};

export type PostObjectUnion = Post | Page | MediaItem | ReusableBlock | BlockEditorPreview | CaseStudy | Event | Inspiration | Review;

export type TermObjectUnion = Category | Tag | PostFormat | Series;

/** The payload for the createBlockEditorPreview mutation */
export type CreateBlockEditorPreviewPayload = {
  __typename?: 'CreateBlockEditorPreviewPayload';
  /** @deprecated  */
  blockEditorPreview?: Maybe<BlockEditorPreview>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createBlockEditorPreview mutation */
export type CreateBlockEditorPreviewInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateBlockEditorPreview mutation */
export type UpdateBlockEditorPreviewPayload = {
  __typename?: 'UpdateBlockEditorPreviewPayload';
  /** @deprecated  */
  blockEditorPreview?: Maybe<BlockEditorPreview>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateBlockEditorPreview mutation */
export type UpdateBlockEditorPreviewInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the BlockEditorPreview object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the deleteBlockEditorPreview mutation */
export type DeleteBlockEditorPreviewPayload = {
  __typename?: 'DeleteBlockEditorPreviewPayload';
  /**
   * The object before it was deleted
   * @deprecated 
   */
  blockEditorPreview?: Maybe<BlockEditorPreview>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteBlockEditorPreview mutation */
export type DeleteBlockEditorPreviewInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the BlockEditorPreview to delete */
  id: Scalars['ID'];
};



export type YoastHowToBlockAttributes = {
  __typename?: 'YoastHowToBlockAttributes';
  /** @deprecated  */
  additionalListCssClasses?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  days?: Maybe<Scalars['String']>;
  /** @deprecated  */
  defaultDurationText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  description?: Maybe<Scalars['BlockAttributesArray']>;
  /** @deprecated  */
  durationText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasDuration?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  hours?: Maybe<Scalars['String']>;
  /** @deprecated  */
  jsonDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  minutes?: Maybe<Scalars['String']>;
  /** @deprecated  */
  steps?: Maybe<Scalars['BlockAttributesArray']>;
  /** @deprecated  */
  unorderedList?: Maybe<Scalars['Boolean']>;
};

export type YoastHowToBlockDeprecatedV1Attributes = {
  __typename?: 'YoastHowToBlockDeprecatedV1Attributes';
  /** @deprecated  */
  additionalListCssClasses?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  days?: Maybe<Scalars['String']>;
  /** @deprecated  */
  defaultDurationText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  description?: Maybe<Scalars['BlockAttributesArray']>;
  /** @deprecated  */
  durationText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasDuration?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  hours?: Maybe<Scalars['String']>;
  /** @deprecated  */
  jsonDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  minutes?: Maybe<Scalars['String']>;
  /** @deprecated  */
  steps?: Maybe<Scalars['BlockAttributesArray']>;
  /** @deprecated  */
  unorderedList?: Maybe<Scalars['Boolean']>;
};

export type YoastHowToBlockDeprecatedV2Attributes = {
  __typename?: 'YoastHowToBlockDeprecatedV2Attributes';
  /** @deprecated  */
  additionalListCssClasses?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  days?: Maybe<Scalars['String']>;
  /** @deprecated  */
  defaultDurationText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  description?: Maybe<Scalars['BlockAttributesArray']>;
  /** @deprecated  */
  durationText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasDuration?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  hours?: Maybe<Scalars['String']>;
  /** @deprecated  */
  jsonDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  minutes?: Maybe<Scalars['String']>;
  /** @deprecated  */
  steps?: Maybe<Scalars['BlockAttributesArray']>;
  /** @deprecated  */
  unorderedList?: Maybe<Scalars['Boolean']>;
};

export type YoastHowToBlockAttributesUnion = YoastHowToBlockAttributes | YoastHowToBlockDeprecatedV1Attributes | YoastHowToBlockDeprecatedV2Attributes;

/** yoast/how-to-block block */
export type YoastHowToBlock = Block & {
  __typename?: 'YoastHowToBlock';
  /** @deprecated  */
  attributes?: Maybe<YoastHowToBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type YoastFaqBlockAttributes = {
  __typename?: 'YoastFaqBlockAttributes';
  /** @deprecated  */
  additionalListCssClasses?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  questions?: Maybe<Scalars['BlockAttributesArray']>;
};

export type YoastFaqBlockDeprecatedV1Attributes = {
  __typename?: 'YoastFaqBlockDeprecatedV1Attributes';
  /** @deprecated  */
  additionalListCssClasses?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  questions?: Maybe<Scalars['BlockAttributesArray']>;
};

export type YoastFaqBlockAttributesUnion = YoastFaqBlockAttributes | YoastFaqBlockDeprecatedV1Attributes;

/** yoast/faq-block block */
export type YoastFaqBlock = Block & {
  __typename?: 'YoastFaqBlock';
  /** @deprecated  */
  attributes?: Maybe<YoastFaqBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfCodeBlockAttributes = {
  __typename?: 'AcfCodeBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfCodeBlock_Codefields = {
  __typename?: 'AcfCodeBlock_Codefields';
  /** @deprecated  */
  code?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Scalars['String']>;
};

/** acf/code block */
export type AcfCodeBlock = Block & {
  __typename?: 'AcfCodeBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfCodeBlockAttributes>;
  /** @deprecated  */
  codeFields?: Maybe<AcfCodeBlock_Codefields>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfDribbbleBlockAttributes = {
  __typename?: 'AcfDribbbleBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfDribbbleBlock_Dribbblefields = {
  __typename?: 'AcfDribbbleBlock_Dribbblefields';
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  count?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** acf/dribbble block */
export type AcfDribbbleBlock = Block & {
  __typename?: 'AcfDribbbleBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfDribbbleBlockAttributes>;
  /** @deprecated  */
  dribbbleFields?: Maybe<AcfDribbbleBlock_Dribbblefields>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfGithubBlockAttributes = {
  __typename?: 'AcfGithubBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfGithubBlock_Githubfields = {
  __typename?: 'AcfGithubBlock_Githubfields';
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** acf/github block */
export type AcfGithubBlock = Block & {
  __typename?: 'AcfGithubBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfGithubBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /** @deprecated  */
  githubFields?: Maybe<AcfGithubBlock_Githubfields>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfHeroBlockAttributes = {
  __typename?: 'AcfHeroBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfHeroBlock_Herofields = {
  __typename?: 'AcfHeroBlock_Herofields';
  /** @deprecated  */
  backgroundColour?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  duotone?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  media?: Maybe<MediaItem>;
  /** @deprecated  */
  overlay?: Maybe<Scalars['Boolean']>;
};

/** acf/hero block */
export type AcfHeroBlock = Block & {
  __typename?: 'AcfHeroBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfHeroBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /** @deprecated  */
  heroFields?: Maybe<AcfHeroBlock_Herofields>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfIntroBlockAttributes = {
  __typename?: 'AcfIntroBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfIntroBlock_Introfields = {
  __typename?: 'AcfIntroBlock_Introfields';
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  heading?: Maybe<Scalars['String']>;
  /** @deprecated  */
  subheading?: Maybe<Scalars['String']>;
};

/** acf/intro block */
export type AcfIntroBlock = Block & {
  __typename?: 'AcfIntroBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfIntroBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /** @deprecated  */
  introFields?: Maybe<AcfIntroBlock_Introfields>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfLinkBlockAttributes = {
  __typename?: 'AcfLinkBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfLinkBlock_Linkfields = {
  __typename?: 'AcfLinkBlock_Linkfields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

/** acf/link block */
export type AcfLinkBlock = Block & {
  __typename?: 'AcfLinkBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfLinkBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /** @deprecated  */
  linkFields?: Maybe<AcfLinkBlock_Linkfields>;
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfPresentationsBlockAttributes = {
  __typename?: 'AcfPresentationsBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfPresentationsBlock_Presentationsfields = {
  __typename?: 'AcfPresentationsBlock_Presentationsfields';
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  count?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** acf/presentations block */
export type AcfPresentationsBlock = Block & {
  __typename?: 'AcfPresentationsBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfPresentationsBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /** @deprecated  */
  presentationsFields?: Maybe<AcfPresentationsBlock_Presentationsfields>;
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfRowBlockAttributes = {
  __typename?: 'AcfRowBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfRowBlock_Rowfields = {
  __typename?: 'AcfRowBlock_Rowfields';
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  link?: Maybe<Scalars['String']>;
  /** @deprecated  */
  media?: Maybe<MediaItem>;
};

/** acf/row block */
export type AcfRowBlock = Block & {
  __typename?: 'AcfRowBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfRowBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /** @deprecated  */
  rowFields?: Maybe<AcfRowBlock_Rowfields>;
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfTestimonialsBlockAttributes = {
  __typename?: 'AcfTestimonialsBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfTestimonialsBlock_Testimonialsfields = {
  __typename?: 'AcfTestimonialsBlock_Testimonialsfields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  testimonials?: Maybe<Array<Maybe<AcfTestimonialsBlock_Testimonialsfields_Testimonials>>>;
};

/** Field Group */
export type AcfTestimonialsBlock_Testimonialsfields_Testimonials = {
  __typename?: 'AcfTestimonialsBlock_Testimonialsfields_testimonials';
  /** @deprecated  */
  author?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  logo?: Maybe<MediaItem>;
  /** @deprecated  */
  media?: Maybe<MediaItem>;
  /** @deprecated  */
  role?: Maybe<Scalars['String']>;
  /** @deprecated  */
  testimonial?: Maybe<Scalars['String']>;
};

/** acf/testimonials block */
export type AcfTestimonialsBlock = Block & {
  __typename?: 'AcfTestimonialsBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfTestimonialsBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
  /** @deprecated  */
  testimonialsFields?: Maybe<AcfTestimonialsBlock_Testimonialsfields>;
};

export type AcfWorkBlockAttributes = {
  __typename?: 'AcfWorkBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** acf/work block */
export type AcfWorkBlock = Block & {
  __typename?: 'AcfWorkBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfWorkBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type AcfYoutubeBlockAttributes = {
  __typename?: 'AcfYoutubeBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfYoutubeBlock_Youtubefields = {
  __typename?: 'AcfYoutubeBlock_Youtubefields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  media?: Maybe<Scalars['String']>;
};

/** acf/youtube block */
export type AcfYoutubeBlock = Block & {
  __typename?: 'AcfYoutubeBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfYoutubeBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
  /** @deprecated  */
  youtubeFields?: Maybe<AcfYoutubeBlock_Youtubefields>;
};

export type AcfYoutubechannelBlockAttributes = {
  __typename?: 'AcfYoutubechannelBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  data?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mode?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

/** Field Group */
export type AcfYoutubechannelBlock_Youtubechannelfields = {
  __typename?: 'AcfYoutubechannelBlock_Youtubechannelfields';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** acf/youtubechannel block */
export type AcfYoutubechannelBlock = Block & {
  __typename?: 'AcfYoutubechannelBlock';
  /** @deprecated  */
  attributes?: Maybe<AcfYoutubechannelBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
  /** @deprecated  */
  youtubeChannelFields?: Maybe<AcfYoutubechannelBlock_Youtubechannelfields>;
};

export type CoreParagraphBlockAttributes = {
  __typename?: 'CoreParagraphBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  direction?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dropCap: Scalars['Boolean'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreParagraphBlockDeprecatedV1Attributes = {
  __typename?: 'CoreParagraphBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  direction?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dropCap: Scalars['Boolean'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreParagraphBlockDeprecatedV2Attributes = {
  __typename?: 'CoreParagraphBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  direction?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dropCap: Scalars['Boolean'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreParagraphBlockDeprecatedV3Attributes = {
  __typename?: 'CoreParagraphBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  direction?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dropCap: Scalars['Boolean'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreParagraphBlockDeprecatedV4Attributes = {
  __typename?: 'CoreParagraphBlockDeprecatedV4Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  direction?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dropCap: Scalars['Boolean'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreParagraphBlockDeprecatedV5Attributes = {
  __typename?: 'CoreParagraphBlockDeprecatedV5Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  direction?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dropCap: Scalars['Boolean'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreParagraphBlockAttributesUnion = CoreParagraphBlockAttributes | CoreParagraphBlockDeprecatedV1Attributes | CoreParagraphBlockDeprecatedV2Attributes | CoreParagraphBlockDeprecatedV3Attributes | CoreParagraphBlockDeprecatedV4Attributes | CoreParagraphBlockDeprecatedV5Attributes;

/** core/paragraph block */
export type CoreParagraphBlock = Block & {
  __typename?: 'CoreParagraphBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreParagraphBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreImageBlockAttributes = {
  __typename?: 'CoreImageBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  height?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination: Scalars['String'];
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  sizeSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
  /** @deprecated  */
  width?: Maybe<Scalars['Float']>;
};

export type CoreImageBlockDeprecatedV1Attributes = {
  __typename?: 'CoreImageBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  height?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination: Scalars['String'];
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  sizeSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
  /** @deprecated  */
  width?: Maybe<Scalars['Float']>;
};

export type CoreImageBlockDeprecatedV2Attributes = {
  __typename?: 'CoreImageBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  height?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination: Scalars['String'];
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  sizeSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
  /** @deprecated  */
  width?: Maybe<Scalars['Float']>;
};

export type CoreImageBlockDeprecatedV3Attributes = {
  __typename?: 'CoreImageBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  height?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination: Scalars['String'];
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  sizeSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
  /** @deprecated  */
  width?: Maybe<Scalars['Float']>;
};

export type CoreImageBlockAttributesUnion = CoreImageBlockAttributes | CoreImageBlockDeprecatedV1Attributes | CoreImageBlockDeprecatedV2Attributes | CoreImageBlockDeprecatedV3Attributes;

/** core/image block */
export type CoreImageBlock = Block & {
  __typename?: 'CoreImageBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreImageBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreHeadingBlockAttributes = {
  __typename?: 'CoreHeadingBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  level: Scalars['Float'];
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreHeadingBlockDeprecatedV1Attributes = {
  __typename?: 'CoreHeadingBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  level: Scalars['Float'];
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreHeadingBlockDeprecatedV2Attributes = {
  __typename?: 'CoreHeadingBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  level: Scalars['Float'];
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreHeadingBlockDeprecatedV3Attributes = {
  __typename?: 'CoreHeadingBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  fontSize?: Maybe<Scalars['String']>;
  /** @deprecated  */
  level: Scalars['Float'];
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreHeadingBlockAttributesUnion = CoreHeadingBlockAttributes | CoreHeadingBlockDeprecatedV1Attributes | CoreHeadingBlockDeprecatedV2Attributes | CoreHeadingBlockDeprecatedV3Attributes;

/** core/heading block */
export type CoreHeadingBlock = Block & {
  __typename?: 'CoreHeadingBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreHeadingBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreGalleryBlockAttributesImages = {
  __typename?: 'CoreGalleryBlockAttributesImages';
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fullUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  link?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreGalleryBlockAttributes = {
  __typename?: 'CoreGalleryBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  ids: Array<Maybe<Scalars['Float']>>;
  /** @deprecated  */
  imageCrop: Scalars['Boolean'];
  /** @deprecated  */
  images: Array<Maybe<CoreGalleryBlockAttributesImages>>;
  /** @deprecated  */
  linkTo: Scalars['String'];
  /** @deprecated  */
  sizeSlug: Scalars['String'];
};

export type CoreGalleryBlockDeprecatedV1AttributesImages = {
  __typename?: 'CoreGalleryBlockDeprecatedV1AttributesImages';
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fullUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  link?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreGalleryBlockDeprecatedV1Attributes = {
  __typename?: 'CoreGalleryBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  ids: Array<Maybe<Scalars['Float']>>;
  /** @deprecated  */
  imageCrop: Scalars['Boolean'];
  /** @deprecated  */
  images: Array<Maybe<CoreGalleryBlockDeprecatedV1AttributesImages>>;
  /** @deprecated  */
  linkTo: Scalars['String'];
  /** @deprecated  */
  sizeSlug: Scalars['String'];
};

export type CoreGalleryBlockDeprecatedV2AttributesImages = {
  __typename?: 'CoreGalleryBlockDeprecatedV2AttributesImages';
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fullUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  link?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreGalleryBlockDeprecatedV2Attributes = {
  __typename?: 'CoreGalleryBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  ids: Array<Maybe<Scalars['Float']>>;
  /** @deprecated  */
  imageCrop: Scalars['Boolean'];
  /** @deprecated  */
  images: Array<Maybe<CoreGalleryBlockDeprecatedV2AttributesImages>>;
  /** @deprecated  */
  linkTo: Scalars['String'];
  /** @deprecated  */
  sizeSlug: Scalars['String'];
};

export type CoreGalleryBlockDeprecatedV3AttributesImages = {
  __typename?: 'CoreGalleryBlockDeprecatedV3AttributesImages';
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fullUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  link?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreGalleryBlockDeprecatedV3Attributes = {
  __typename?: 'CoreGalleryBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  ids: Array<Maybe<Scalars['Float']>>;
  /** @deprecated  */
  imageCrop: Scalars['Boolean'];
  /** @deprecated  */
  images: Array<Maybe<CoreGalleryBlockDeprecatedV3AttributesImages>>;
  /** @deprecated  */
  linkTo: Scalars['String'];
  /** @deprecated  */
  sizeSlug: Scalars['String'];
};

export type CoreGalleryBlockDeprecatedV4AttributesImages = {
  __typename?: 'CoreGalleryBlockDeprecatedV4AttributesImages';
  /** @deprecated  */
  alt: Scalars['String'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fullUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  link?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreGalleryBlockDeprecatedV4Attributes = {
  __typename?: 'CoreGalleryBlockDeprecatedV4Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  ids: Array<Maybe<Scalars['Float']>>;
  /** @deprecated  */
  imageCrop: Scalars['Boolean'];
  /** @deprecated  */
  images: Array<Maybe<CoreGalleryBlockDeprecatedV4AttributesImages>>;
  /** @deprecated  */
  linkTo: Scalars['String'];
  /** @deprecated  */
  sizeSlug: Scalars['String'];
};

export type CoreGalleryBlockAttributesUnion = CoreGalleryBlockAttributes | CoreGalleryBlockDeprecatedV1Attributes | CoreGalleryBlockDeprecatedV2Attributes | CoreGalleryBlockDeprecatedV3Attributes | CoreGalleryBlockDeprecatedV4Attributes;

/** core/gallery block */
export type CoreGalleryBlock = Block & {
  __typename?: 'CoreGalleryBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreGalleryBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreListBlockAttributes = {
  __typename?: 'CoreListBlockAttributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  ordered: Scalars['Boolean'];
  /** @deprecated  */
  reversed?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  start?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  values: Scalars['String'];
};

/** core/list block */
export type CoreListBlock = Block & {
  __typename?: 'CoreListBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreListBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreQuoteBlockAttributes = {
  __typename?: 'CoreQuoteBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value: Scalars['String'];
};

export type CoreQuoteBlockDeprecatedV1Attributes = {
  __typename?: 'CoreQuoteBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value: Scalars['String'];
};

export type CoreQuoteBlockDeprecatedV2Attributes = {
  __typename?: 'CoreQuoteBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value: Scalars['String'];
};

export type CoreQuoteBlockDeprecatedV3Attributes = {
  __typename?: 'CoreQuoteBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value: Scalars['String'];
};

export type CoreQuoteBlockAttributesUnion = CoreQuoteBlockAttributes | CoreQuoteBlockDeprecatedV1Attributes | CoreQuoteBlockDeprecatedV2Attributes | CoreQuoteBlockDeprecatedV3Attributes;

/** core/quote block */
export type CoreQuoteBlock = Block & {
  __typename?: 'CoreQuoteBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreQuoteBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreShortcodeBlockAttributes = {
  __typename?: 'CoreShortcodeBlockAttributes';
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
};

/** core/shortcode block */
export type CoreShortcodeBlock = Block & {
  __typename?: 'CoreShortcodeBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreShortcodeBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreArchivesBlockAttributes = {
  __typename?: 'CoreArchivesBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  displayAsDropdown: Scalars['Boolean'];
  /** @deprecated  */
  showPostCounts: Scalars['Boolean'];
};

/** core/archives block */
export type CoreArchivesBlock = Block & {
  __typename?: 'CoreArchivesBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreArchivesBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreAudioBlockAttributes = {
  __typename?: 'CoreAudioBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  loop?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  preload?: Maybe<Scalars['String']>;
  /** @deprecated  */
  src?: Maybe<Scalars['String']>;
};

export type CoreAudioBlockDeprecatedV1Attributes = {
  __typename?: 'CoreAudioBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  loop?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  preload?: Maybe<Scalars['String']>;
  /** @deprecated  */
  src?: Maybe<Scalars['String']>;
};

export type CoreAudioBlockAttributesUnion = CoreAudioBlockAttributes | CoreAudioBlockDeprecatedV1Attributes;

/** core/audio block */
export type CoreAudioBlock = Block & {
  __typename?: 'CoreAudioBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreAudioBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockAttributes = {
  __typename?: 'CoreButtonBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  borderRadius?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockDeprecatedV1Attributes = {
  __typename?: 'CoreButtonBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  borderRadius?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockDeprecatedV2Attributes = {
  __typename?: 'CoreButtonBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  borderRadius?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockDeprecatedV3Attributes = {
  __typename?: 'CoreButtonBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  borderRadius?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockDeprecatedV4Attributes = {
  __typename?: 'CoreButtonBlockDeprecatedV4Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  borderRadius?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockDeprecatedV5Attributes = {
  __typename?: 'CoreButtonBlockDeprecatedV5Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  borderRadius?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockDeprecatedV6Attributes = {
  __typename?: 'CoreButtonBlockDeprecatedV6Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  borderRadius?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreButtonBlockAttributesUnion = CoreButtonBlockAttributes | CoreButtonBlockDeprecatedV1Attributes | CoreButtonBlockDeprecatedV2Attributes | CoreButtonBlockDeprecatedV3Attributes | CoreButtonBlockDeprecatedV4Attributes | CoreButtonBlockDeprecatedV5Attributes | CoreButtonBlockDeprecatedV6Attributes;

/** core/button block */
export type CoreButtonBlock = Block & {
  __typename?: 'CoreButtonBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreButtonBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreButtonsBlockAttributes = {
  __typename?: 'CoreButtonsBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
};

/** core/buttons block */
export type CoreButtonsBlock = Block & {
  __typename?: 'CoreButtonsBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreButtonsBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreCalendarBlockAttributes = {
  __typename?: 'CoreCalendarBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  month?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  year?: Maybe<Scalars['Int']>;
};

/** core/calendar block */
export type CoreCalendarBlock = Block & {
  __typename?: 'CoreCalendarBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreCalendarBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreCategoriesBlockAttributes = {
  __typename?: 'CoreCategoriesBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  displayAsDropdown: Scalars['Boolean'];
  /** @deprecated  */
  showHierarchy: Scalars['Boolean'];
  /** @deprecated  */
  showPostCounts: Scalars['Boolean'];
};

/** core/categories block */
export type CoreCategoriesBlock = Block & {
  __typename?: 'CoreCategoriesBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreCategoriesBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreCodeBlockAttributes = {
  __typename?: 'CoreCodeBlockAttributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
};

/** core/code block */
export type CoreCodeBlock = Block & {
  __typename?: 'CoreCodeBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreCodeBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreColumnsBlockAttributes = {
  __typename?: 'CoreColumnsBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreColumnsBlockDeprecatedV1Attributes = {
  __typename?: 'CoreColumnsBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreColumnsBlockDeprecatedV2Attributes = {
  __typename?: 'CoreColumnsBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreColumnsBlockDeprecatedV3Attributes = {
  __typename?: 'CoreColumnsBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreColumnsBlockAttributesUnion = CoreColumnsBlockAttributes | CoreColumnsBlockDeprecatedV1Attributes | CoreColumnsBlockDeprecatedV2Attributes | CoreColumnsBlockDeprecatedV3Attributes;

/** core/columns block */
export type CoreColumnsBlock = Block & {
  __typename?: 'CoreColumnsBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreColumnsBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreColumnBlockAttributes = {
  __typename?: 'CoreColumnBlockAttributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
  /** @deprecated  */
  width?: Maybe<Scalars['Float']>;
};

/** core/column block */
export type CoreColumnBlock = Block & {
  __typename?: 'CoreColumnBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreColumnBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreCoverBlockAttributes = {
  __typename?: 'CoreCoverBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundType: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  contentPosition?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customGradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dimRatio: Scalars['Float'];
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasParallax: Scalars['Boolean'];
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  overlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreCoverBlockDeprecatedV1Attributes = {
  __typename?: 'CoreCoverBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundType: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  contentPosition?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customGradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dimRatio: Scalars['Float'];
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasParallax: Scalars['Boolean'];
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  overlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreCoverBlockDeprecatedV2Attributes = {
  __typename?: 'CoreCoverBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundType: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  contentPosition?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customGradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dimRatio: Scalars['Float'];
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasParallax: Scalars['Boolean'];
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  overlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreCoverBlockDeprecatedV3Attributes = {
  __typename?: 'CoreCoverBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundType: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  contentPosition?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customGradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dimRatio: Scalars['Float'];
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasParallax: Scalars['Boolean'];
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  overlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreCoverBlockDeprecatedV4Attributes = {
  __typename?: 'CoreCoverBlockDeprecatedV4Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundType: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  contentPosition?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customGradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dimRatio: Scalars['Float'];
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasParallax: Scalars['Boolean'];
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  overlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreCoverBlockDeprecatedV5Attributes = {
  __typename?: 'CoreCoverBlockDeprecatedV5Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundType: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  contentPosition?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customGradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  dimRatio: Scalars['Float'];
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  hasParallax: Scalars['Boolean'];
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  overlayColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreCoverBlockAttributesUnion = CoreCoverBlockAttributes | CoreCoverBlockDeprecatedV1Attributes | CoreCoverBlockDeprecatedV2Attributes | CoreCoverBlockDeprecatedV3Attributes | CoreCoverBlockDeprecatedV4Attributes | CoreCoverBlockDeprecatedV5Attributes;

/** core/cover block */
export type CoreCoverBlock = Block & {
  __typename?: 'CoreCoverBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreCoverBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedBlockAttributes = {
  __typename?: 'CoreEmbedBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedBlockAttributesUnion = CoreEmbedBlockAttributes | CoreEmbedBlockDeprecatedV1Attributes;

/** core/embed block */
export type CoreEmbedBlock = Block & {
  __typename?: 'CoreEmbedBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedTwitterBlockAttributes = {
  __typename?: 'CoreEmbedTwitterBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTwitterBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedTwitterBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTwitterBlockAttributesUnion = CoreEmbedTwitterBlockAttributes | CoreEmbedTwitterBlockDeprecatedV1Attributes;

/** core-embed/twitter block */
export type CoreEmbedTwitterBlock = Block & {
  __typename?: 'CoreEmbedTwitterBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedTwitterBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedYoutubeBlockAttributes = {
  __typename?: 'CoreEmbedYoutubeBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedYoutubeBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedYoutubeBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedYoutubeBlockAttributesUnion = CoreEmbedYoutubeBlockAttributes | CoreEmbedYoutubeBlockDeprecatedV1Attributes;

/** core-embed/youtube block */
export type CoreEmbedYoutubeBlock = Block & {
  __typename?: 'CoreEmbedYoutubeBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedYoutubeBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedFacebookBlockAttributes = {
  __typename?: 'CoreEmbedFacebookBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedFacebookBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedFacebookBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedFacebookBlockAttributesUnion = CoreEmbedFacebookBlockAttributes | CoreEmbedFacebookBlockDeprecatedV1Attributes;

/** core-embed/facebook block */
export type CoreEmbedFacebookBlock = Block & {
  __typename?: 'CoreEmbedFacebookBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedFacebookBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedInstagramBlockAttributes = {
  __typename?: 'CoreEmbedInstagramBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedInstagramBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedInstagramBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedInstagramBlockAttributesUnion = CoreEmbedInstagramBlockAttributes | CoreEmbedInstagramBlockDeprecatedV1Attributes;

/** core-embed/instagram block */
export type CoreEmbedInstagramBlock = Block & {
  __typename?: 'CoreEmbedInstagramBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedInstagramBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedWordpressBlockAttributes = {
  __typename?: 'CoreEmbedWordpressBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedWordpressBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedWordpressBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedWordpressBlockAttributesUnion = CoreEmbedWordpressBlockAttributes | CoreEmbedWordpressBlockDeprecatedV1Attributes;

/** core-embed/wordpress block */
export type CoreEmbedWordpressBlock = Block & {
  __typename?: 'CoreEmbedWordpressBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedWordpressBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedSoundcloudBlockAttributes = {
  __typename?: 'CoreEmbedSoundcloudBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSoundcloudBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedSoundcloudBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSoundcloudBlockAttributesUnion = CoreEmbedSoundcloudBlockAttributes | CoreEmbedSoundcloudBlockDeprecatedV1Attributes;

/** core-embed/soundcloud block */
export type CoreEmbedSoundcloudBlock = Block & {
  __typename?: 'CoreEmbedSoundcloudBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSoundcloudBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpotifyBlockAttributes = {
  __typename?: 'CoreEmbedSpotifyBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpotifyBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedSpotifyBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpotifyBlockAttributesUnion = CoreEmbedSpotifyBlockAttributes | CoreEmbedSpotifyBlockDeprecatedV1Attributes;

/** core-embed/spotify block */
export type CoreEmbedSpotifyBlock = Block & {
  __typename?: 'CoreEmbedSpotifyBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSpotifyBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedFlickrBlockAttributes = {
  __typename?: 'CoreEmbedFlickrBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedFlickrBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedFlickrBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedFlickrBlockAttributesUnion = CoreEmbedFlickrBlockAttributes | CoreEmbedFlickrBlockDeprecatedV1Attributes;

/** core-embed/flickr block */
export type CoreEmbedFlickrBlock = Block & {
  __typename?: 'CoreEmbedFlickrBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedFlickrBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedVimeoBlockAttributes = {
  __typename?: 'CoreEmbedVimeoBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedVimeoBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedVimeoBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedVimeoBlockAttributesUnion = CoreEmbedVimeoBlockAttributes | CoreEmbedVimeoBlockDeprecatedV1Attributes;

/** core-embed/vimeo block */
export type CoreEmbedVimeoBlock = Block & {
  __typename?: 'CoreEmbedVimeoBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedVimeoBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedAnimotoBlockAttributes = {
  __typename?: 'CoreEmbedAnimotoBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedAnimotoBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedAnimotoBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedAnimotoBlockAttributesUnion = CoreEmbedAnimotoBlockAttributes | CoreEmbedAnimotoBlockDeprecatedV1Attributes;

/** core-embed/animoto block */
export type CoreEmbedAnimotoBlock = Block & {
  __typename?: 'CoreEmbedAnimotoBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedAnimotoBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedCloudupBlockAttributes = {
  __typename?: 'CoreEmbedCloudupBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedCloudupBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedCloudupBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedCloudupBlockAttributesUnion = CoreEmbedCloudupBlockAttributes | CoreEmbedCloudupBlockDeprecatedV1Attributes;

/** core-embed/cloudup block */
export type CoreEmbedCloudupBlock = Block & {
  __typename?: 'CoreEmbedCloudupBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedCloudupBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedCollegehumorBlockAttributes = {
  __typename?: 'CoreEmbedCollegehumorBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedCollegehumorBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedCollegehumorBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedCollegehumorBlockAttributesUnion = CoreEmbedCollegehumorBlockAttributes | CoreEmbedCollegehumorBlockDeprecatedV1Attributes;

/** core-embed/collegehumor block */
export type CoreEmbedCollegehumorBlock = Block & {
  __typename?: 'CoreEmbedCollegehumorBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedCollegehumorBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedCrowdsignalBlockAttributes = {
  __typename?: 'CoreEmbedCrowdsignalBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedCrowdsignalBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedCrowdsignalBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedCrowdsignalBlockAttributesUnion = CoreEmbedCrowdsignalBlockAttributes | CoreEmbedCrowdsignalBlockDeprecatedV1Attributes;

/** core-embed/crowdsignal block */
export type CoreEmbedCrowdsignalBlock = Block & {
  __typename?: 'CoreEmbedCrowdsignalBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedCrowdsignalBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedDailymotionBlockAttributes = {
  __typename?: 'CoreEmbedDailymotionBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedDailymotionBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedDailymotionBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedDailymotionBlockAttributesUnion = CoreEmbedDailymotionBlockAttributes | CoreEmbedDailymotionBlockDeprecatedV1Attributes;

/** core-embed/dailymotion block */
export type CoreEmbedDailymotionBlock = Block & {
  __typename?: 'CoreEmbedDailymotionBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedDailymotionBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedImgurBlockAttributes = {
  __typename?: 'CoreEmbedImgurBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedImgurBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedImgurBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedImgurBlockAttributesUnion = CoreEmbedImgurBlockAttributes | CoreEmbedImgurBlockDeprecatedV1Attributes;

/** core-embed/imgur block */
export type CoreEmbedImgurBlock = Block & {
  __typename?: 'CoreEmbedImgurBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedImgurBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedIssuuBlockAttributes = {
  __typename?: 'CoreEmbedIssuuBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedIssuuBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedIssuuBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedIssuuBlockAttributesUnion = CoreEmbedIssuuBlockAttributes | CoreEmbedIssuuBlockDeprecatedV1Attributes;

/** core-embed/issuu block */
export type CoreEmbedIssuuBlock = Block & {
  __typename?: 'CoreEmbedIssuuBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedIssuuBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedKickstarterBlockAttributes = {
  __typename?: 'CoreEmbedKickstarterBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedKickstarterBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedKickstarterBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedKickstarterBlockAttributesUnion = CoreEmbedKickstarterBlockAttributes | CoreEmbedKickstarterBlockDeprecatedV1Attributes;

/** core-embed/kickstarter block */
export type CoreEmbedKickstarterBlock = Block & {
  __typename?: 'CoreEmbedKickstarterBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedKickstarterBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedMeetupComBlockAttributes = {
  __typename?: 'CoreEmbedMeetupComBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedMeetupComBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedMeetupComBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedMeetupComBlockAttributesUnion = CoreEmbedMeetupComBlockAttributes | CoreEmbedMeetupComBlockDeprecatedV1Attributes;

/** core-embed/meetup-com block */
export type CoreEmbedMeetupComBlock = Block & {
  __typename?: 'CoreEmbedMeetupComBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedMeetupComBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedMixcloudBlockAttributes = {
  __typename?: 'CoreEmbedMixcloudBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedMixcloudBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedMixcloudBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedMixcloudBlockAttributesUnion = CoreEmbedMixcloudBlockAttributes | CoreEmbedMixcloudBlockDeprecatedV1Attributes;

/** core-embed/mixcloud block */
export type CoreEmbedMixcloudBlock = Block & {
  __typename?: 'CoreEmbedMixcloudBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedMixcloudBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedPolldaddyBlockAttributes = {
  __typename?: 'CoreEmbedPolldaddyBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedPolldaddyBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedPolldaddyBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedPolldaddyBlockAttributesUnion = CoreEmbedPolldaddyBlockAttributes | CoreEmbedPolldaddyBlockDeprecatedV1Attributes;

/** core-embed/polldaddy block */
export type CoreEmbedPolldaddyBlock = Block & {
  __typename?: 'CoreEmbedPolldaddyBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedPolldaddyBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedRedditBlockAttributes = {
  __typename?: 'CoreEmbedRedditBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedRedditBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedRedditBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedRedditBlockAttributesUnion = CoreEmbedRedditBlockAttributes | CoreEmbedRedditBlockDeprecatedV1Attributes;

/** core-embed/reddit block */
export type CoreEmbedRedditBlock = Block & {
  __typename?: 'CoreEmbedRedditBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedRedditBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedReverbnationBlockAttributes = {
  __typename?: 'CoreEmbedReverbnationBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedReverbnationBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedReverbnationBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedReverbnationBlockAttributesUnion = CoreEmbedReverbnationBlockAttributes | CoreEmbedReverbnationBlockDeprecatedV1Attributes;

/** core-embed/reverbnation block */
export type CoreEmbedReverbnationBlock = Block & {
  __typename?: 'CoreEmbedReverbnationBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedReverbnationBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedScreencastBlockAttributes = {
  __typename?: 'CoreEmbedScreencastBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedScreencastBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedScreencastBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedScreencastBlockAttributesUnion = CoreEmbedScreencastBlockAttributes | CoreEmbedScreencastBlockDeprecatedV1Attributes;

/** core-embed/screencast block */
export type CoreEmbedScreencastBlock = Block & {
  __typename?: 'CoreEmbedScreencastBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedScreencastBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedScribdBlockAttributes = {
  __typename?: 'CoreEmbedScribdBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedScribdBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedScribdBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedScribdBlockAttributesUnion = CoreEmbedScribdBlockAttributes | CoreEmbedScribdBlockDeprecatedV1Attributes;

/** core-embed/scribd block */
export type CoreEmbedScribdBlock = Block & {
  __typename?: 'CoreEmbedScribdBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedScribdBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedSlideshareBlockAttributes = {
  __typename?: 'CoreEmbedSlideshareBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSlideshareBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedSlideshareBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSlideshareBlockAttributesUnion = CoreEmbedSlideshareBlockAttributes | CoreEmbedSlideshareBlockDeprecatedV1Attributes;

/** core-embed/slideshare block */
export type CoreEmbedSlideshareBlock = Block & {
  __typename?: 'CoreEmbedSlideshareBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSlideshareBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedSmugmugBlockAttributes = {
  __typename?: 'CoreEmbedSmugmugBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSmugmugBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedSmugmugBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSmugmugBlockAttributesUnion = CoreEmbedSmugmugBlockAttributes | CoreEmbedSmugmugBlockDeprecatedV1Attributes;

/** core-embed/smugmug block */
export type CoreEmbedSmugmugBlock = Block & {
  __typename?: 'CoreEmbedSmugmugBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSmugmugBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpeakerBlockAttributes = {
  __typename?: 'CoreEmbedSpeakerBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpeakerBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedSpeakerBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpeakerBlockAttributesUnion = CoreEmbedSpeakerBlockAttributes | CoreEmbedSpeakerBlockDeprecatedV1Attributes;

/** core-embed/speaker block */
export type CoreEmbedSpeakerBlock = Block & {
  __typename?: 'CoreEmbedSpeakerBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSpeakerBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpeakerDeckBlockAttributes = {
  __typename?: 'CoreEmbedSpeakerDeckBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpeakerDeckBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedSpeakerDeckBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedSpeakerDeckBlockAttributesUnion = CoreEmbedSpeakerDeckBlockAttributes | CoreEmbedSpeakerDeckBlockDeprecatedV1Attributes;

/** core-embed/speaker-deck block */
export type CoreEmbedSpeakerDeckBlock = Block & {
  __typename?: 'CoreEmbedSpeakerDeckBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSpeakerDeckBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedTiktokBlockAttributes = {
  __typename?: 'CoreEmbedTiktokBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTiktokBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedTiktokBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTiktokBlockAttributesUnion = CoreEmbedTiktokBlockAttributes | CoreEmbedTiktokBlockDeprecatedV1Attributes;

/** core-embed/tiktok block */
export type CoreEmbedTiktokBlock = Block & {
  __typename?: 'CoreEmbedTiktokBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedTiktokBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedTedBlockAttributes = {
  __typename?: 'CoreEmbedTedBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTedBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedTedBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTedBlockAttributesUnion = CoreEmbedTedBlockAttributes | CoreEmbedTedBlockDeprecatedV1Attributes;

/** core-embed/ted block */
export type CoreEmbedTedBlock = Block & {
  __typename?: 'CoreEmbedTedBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedTedBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedTumblrBlockAttributes = {
  __typename?: 'CoreEmbedTumblrBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTumblrBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedTumblrBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedTumblrBlockAttributesUnion = CoreEmbedTumblrBlockAttributes | CoreEmbedTumblrBlockDeprecatedV1Attributes;

/** core-embed/tumblr block */
export type CoreEmbedTumblrBlock = Block & {
  __typename?: 'CoreEmbedTumblrBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedTumblrBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedVideopressBlockAttributes = {
  __typename?: 'CoreEmbedVideopressBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedVideopressBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedVideopressBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedVideopressBlockAttributesUnion = CoreEmbedVideopressBlockAttributes | CoreEmbedVideopressBlockDeprecatedV1Attributes;

/** core-embed/videopress block */
export type CoreEmbedVideopressBlock = Block & {
  __typename?: 'CoreEmbedVideopressBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedVideopressBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedWordpressTvBlockAttributes = {
  __typename?: 'CoreEmbedWordpressTvBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedWordpressTvBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedWordpressTvBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedWordpressTvBlockAttributesUnion = CoreEmbedWordpressTvBlockAttributes | CoreEmbedWordpressTvBlockDeprecatedV1Attributes;

/** core-embed/wordpress-tv block */
export type CoreEmbedWordpressTvBlock = Block & {
  __typename?: 'CoreEmbedWordpressTvBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedWordpressTvBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreEmbedAmazonKindleBlockAttributes = {
  __typename?: 'CoreEmbedAmazonKindleBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedAmazonKindleBlockDeprecatedV1Attributes = {
  __typename?: 'CoreEmbedAmazonKindleBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  allowResponsive: Scalars['Boolean'];
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type CoreEmbedAmazonKindleBlockAttributesUnion = CoreEmbedAmazonKindleBlockAttributes | CoreEmbedAmazonKindleBlockDeprecatedV1Attributes;

/** core-embed/amazon-kindle block */
export type CoreEmbedAmazonKindleBlock = Block & {
  __typename?: 'CoreEmbedAmazonKindleBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedAmazonKindleBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreFileBlockAttributes = {
  __typename?: 'CoreFileBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  downloadButtonText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fileName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  showDownloadButton: Scalars['Boolean'];
  /** @deprecated  */
  textLinkHref?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textLinkTarget?: Maybe<Scalars['String']>;
};

/** core/file block */
export type CoreFileBlock = Block & {
  __typename?: 'CoreFileBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreFileBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreGroupBlockAttributes = {
  __typename?: 'CoreGroupBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  tagName: Scalars['String'];
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreGroupBlockDeprecatedV1Attributes = {
  __typename?: 'CoreGroupBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  tagName: Scalars['String'];
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreGroupBlockDeprecatedV2Attributes = {
  __typename?: 'CoreGroupBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  tagName: Scalars['String'];
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreGroupBlockDeprecatedV3Attributes = {
  __typename?: 'CoreGroupBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  tagName: Scalars['String'];
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
};

export type CoreGroupBlockAttributesUnion = CoreGroupBlockAttributes | CoreGroupBlockDeprecatedV1Attributes | CoreGroupBlockDeprecatedV2Attributes | CoreGroupBlockDeprecatedV3Attributes;

/** core/group block */
export type CoreGroupBlock = Block & {
  __typename?: 'CoreGroupBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreGroupBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreFreeformBlockAttributes = {
  __typename?: 'CoreFreeformBlockAttributes';
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
};

/** core/freeform block */
export type CoreFreeformBlock = Block & {
  __typename?: 'CoreFreeformBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreFreeformBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreHtmlBlockAttributes = {
  __typename?: 'CoreHtmlBlockAttributes';
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
};

/** core/html block */
export type CoreHtmlBlock = Block & {
  __typename?: 'CoreHtmlBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreHtmlBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreMediaTextBlockAttributes = {
  __typename?: 'CoreMediaTextBlockAttributes';
  /** @deprecated  */
  align: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  imageFill?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  isStackedOnMobile: Scalars['Boolean'];
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaAlt: Scalars['String'];
  /** @deprecated  */
  mediaId?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  mediaLink?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaPosition: Scalars['String'];
  /** @deprecated  */
  mediaType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaWidth: Scalars['Float'];
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreMediaTextBlockDeprecatedV1Attributes = {
  __typename?: 'CoreMediaTextBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  imageFill?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  isStackedOnMobile: Scalars['Boolean'];
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaAlt: Scalars['String'];
  /** @deprecated  */
  mediaId?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  mediaLink?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaPosition: Scalars['String'];
  /** @deprecated  */
  mediaType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaWidth: Scalars['Float'];
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreMediaTextBlockDeprecatedV2Attributes = {
  __typename?: 'CoreMediaTextBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  imageFill?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  isStackedOnMobile: Scalars['Boolean'];
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaAlt: Scalars['String'];
  /** @deprecated  */
  mediaId?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  mediaLink?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaPosition: Scalars['String'];
  /** @deprecated  */
  mediaType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaWidth: Scalars['Float'];
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreMediaTextBlockDeprecatedV3Attributes = {
  __typename?: 'CoreMediaTextBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align: Scalars['String'];
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  gradient?: Maybe<Scalars['String']>;
  /** @deprecated  */
  href?: Maybe<Scalars['String']>;
  /** @deprecated  */
  imageFill?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  isStackedOnMobile: Scalars['Boolean'];
  /** @deprecated  */
  linkClass?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkDestination?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkTarget?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaAlt: Scalars['String'];
  /** @deprecated  */
  mediaId?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  mediaLink?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaPosition: Scalars['String'];
  /** @deprecated  */
  mediaType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaWidth: Scalars['Float'];
  /** @deprecated  */
  rel?: Maybe<Scalars['String']>;
  /** @deprecated  */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type CoreMediaTextBlockAttributesUnion = CoreMediaTextBlockAttributes | CoreMediaTextBlockDeprecatedV1Attributes | CoreMediaTextBlockDeprecatedV2Attributes | CoreMediaTextBlockDeprecatedV3Attributes;

/** core/media-text block */
export type CoreMediaTextBlock = Block & {
  __typename?: 'CoreMediaTextBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreMediaTextBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreLatestCommentsBlockAttributes = {
  __typename?: 'CoreLatestCommentsBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  commentsToShow: Scalars['Float'];
  /** @deprecated  */
  displayAvatar: Scalars['Boolean'];
  /** @deprecated  */
  displayDate: Scalars['Boolean'];
  /** @deprecated  */
  displayExcerpt: Scalars['Boolean'];
};

/** core/latest-comments block */
export type CoreLatestCommentsBlock = Block & {
  __typename?: 'CoreLatestCommentsBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreLatestCommentsBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreLatestPostsBlockAttributes = {
  __typename?: 'CoreLatestPostsBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  categories?: Maybe<Array<Maybe<Scalars['BlockAttributesObject']>>>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns: Scalars['Float'];
  /** @deprecated  */
  displayAuthor: Scalars['Boolean'];
  /** @deprecated  */
  displayFeaturedImage: Scalars['Boolean'];
  /** @deprecated  */
  displayPostContent: Scalars['Boolean'];
  /** @deprecated  */
  displayPostContentRadio: Scalars['String'];
  /** @deprecated  */
  displayPostDate: Scalars['Boolean'];
  /** @deprecated  */
  excerptLength: Scalars['Float'];
  /** @deprecated  */
  featuredImageAlign?: Maybe<Scalars['String']>;
  /** @deprecated  */
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  featuredImageSizeSlug: Scalars['String'];
  /** @deprecated  */
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  order: Scalars['String'];
  /** @deprecated  */
  orderBy: Scalars['String'];
  /** @deprecated  */
  postLayout: Scalars['String'];
  /** @deprecated  */
  postsToShow: Scalars['Float'];
  /** @deprecated  */
  selectedAuthor?: Maybe<Scalars['Float']>;
};

export type CoreLatestPostsBlockDeprecatedV1Attributes = {
  __typename?: 'CoreLatestPostsBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  categories?: Maybe<Array<Maybe<Scalars['BlockAttributesObject']>>>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns: Scalars['Float'];
  /** @deprecated  */
  displayAuthor: Scalars['Boolean'];
  /** @deprecated  */
  displayFeaturedImage: Scalars['Boolean'];
  /** @deprecated  */
  displayPostContent: Scalars['Boolean'];
  /** @deprecated  */
  displayPostContentRadio: Scalars['String'];
  /** @deprecated  */
  displayPostDate: Scalars['Boolean'];
  /** @deprecated  */
  excerptLength: Scalars['Float'];
  /** @deprecated  */
  featuredImageAlign?: Maybe<Scalars['String']>;
  /** @deprecated  */
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  featuredImageSizeSlug: Scalars['String'];
  /** @deprecated  */
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  order: Scalars['String'];
  /** @deprecated  */
  orderBy: Scalars['String'];
  /** @deprecated  */
  postLayout: Scalars['String'];
  /** @deprecated  */
  postsToShow: Scalars['Float'];
  /** @deprecated  */
  selectedAuthor?: Maybe<Scalars['Float']>;
};

export type CoreLatestPostsBlockAttributesUnion = CoreLatestPostsBlockAttributes | CoreLatestPostsBlockDeprecatedV1Attributes;

/** core/latest-posts block */
export type CoreLatestPostsBlock = Block & {
  __typename?: 'CoreLatestPostsBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreLatestPostsBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreMissingBlockAttributes = {
  __typename?: 'CoreMissingBlockAttributes';
  /** @deprecated  */
  originalContent?: Maybe<Scalars['String']>;
  /** @deprecated  */
  originalName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  originalUndelimitedContent?: Maybe<Scalars['String']>;
};

/** core/missing block */
export type CoreMissingBlock = Block & {
  __typename?: 'CoreMissingBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreMissingBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreMoreBlockAttributes = {
  __typename?: 'CoreMoreBlockAttributes';
  /** @deprecated  */
  customText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  noTeaser: Scalars['Boolean'];
};

/** core/more block */
export type CoreMoreBlock = Block & {
  __typename?: 'CoreMoreBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreMoreBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

/** core/nextpage block */
export type CoreNextpageBlock = Block & {
  __typename?: 'CoreNextpageBlock';
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CorePreformattedBlockAttributes = {
  __typename?: 'CorePreformattedBlockAttributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
};

/** core/preformatted block */
export type CorePreformattedBlock = Block & {
  __typename?: 'CorePreformattedBlock';
  /** @deprecated  */
  attributes?: Maybe<CorePreformattedBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CorePullquoteBlockAttributes = {
  __typename?: 'CorePullquoteBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customMainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customTextColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value?: Maybe<Scalars['String']>;
};

export type CorePullquoteBlockDeprecatedV1Attributes = {
  __typename?: 'CorePullquoteBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customMainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customTextColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value?: Maybe<Scalars['String']>;
};

export type CorePullquoteBlockDeprecatedV2Attributes = {
  __typename?: 'CorePullquoteBlockDeprecatedV2Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customMainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customTextColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value?: Maybe<Scalars['String']>;
};

export type CorePullquoteBlockDeprecatedV3Attributes = {
  __typename?: 'CorePullquoteBlockDeprecatedV3Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customMainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customTextColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value?: Maybe<Scalars['String']>;
};

export type CorePullquoteBlockDeprecatedV4Attributes = {
  __typename?: 'CorePullquoteBlockDeprecatedV4Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  citation: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customMainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customTextColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mainColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  textColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  value?: Maybe<Scalars['String']>;
};

export type CorePullquoteBlockAttributesUnion = CorePullquoteBlockAttributes | CorePullquoteBlockDeprecatedV1Attributes | CorePullquoteBlockDeprecatedV2Attributes | CorePullquoteBlockDeprecatedV3Attributes | CorePullquoteBlockDeprecatedV4Attributes;

/** core/pullquote block */
export type CorePullquoteBlock = Block & {
  __typename?: 'CorePullquoteBlock';
  /** @deprecated  */
  attributes?: Maybe<CorePullquoteBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreRssBlockAttributes = {
  __typename?: 'CoreRssBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  blockLayout: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns: Scalars['Float'];
  /** @deprecated  */
  displayAuthor: Scalars['Boolean'];
  /** @deprecated  */
  displayDate: Scalars['Boolean'];
  /** @deprecated  */
  displayExcerpt: Scalars['Boolean'];
  /** @deprecated  */
  excerptLength: Scalars['Float'];
  /** @deprecated  */
  feedURL: Scalars['String'];
  /** @deprecated  */
  itemsToShow: Scalars['Float'];
};

/** core/rss block */
export type CoreRssBlock = Block & {
  __typename?: 'CoreRssBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreRssBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreSearchBlockAttributes = {
  __typename?: 'CoreSearchBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  buttonText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  label?: Maybe<Scalars['String']>;
  /** @deprecated  */
  placeholder: Scalars['String'];
};

/** core/search block */
export type CoreSearchBlock = Block & {
  __typename?: 'CoreSearchBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreSearchBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreSeparatorBlockAttributes = {
  __typename?: 'CoreSeparatorBlockAttributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  color?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customColor?: Maybe<Scalars['String']>;
};

/** core/separator block */
export type CoreSeparatorBlock = Block & {
  __typename?: 'CoreSeparatorBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreSeparatorBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreBlockAttributes = {
  __typename?: 'CoreBlockAttributes';
  /** @deprecated  */
  ref?: Maybe<Scalars['Float']>;
};

/** core/block block */
export type CoreBlock = Block & {
  __typename?: 'CoreBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /** @deprecated  */
  reusableBlock: Node;
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreSocialLinksBlockAttributes = {
  __typename?: 'CoreSocialLinksBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
};

/** core/social-links block */
export type CoreSocialLinksBlock = Block & {
  __typename?: 'CoreSocialLinksBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreSocialLinksBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreSocialLinkBlockAttributes = {
  __typename?: 'CoreSocialLinkBlockAttributes';
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  label?: Maybe<Scalars['String']>;
  /** @deprecated  */
  service?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

/** core/social-link block */
export type CoreSocialLinkBlock = Block & {
  __typename?: 'CoreSocialLinkBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreSocialLinkBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreSpacerBlockAttributes = {
  __typename?: 'CoreSpacerBlockAttributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  height: Scalars['Float'];
};

/** core/spacer block */
export type CoreSpacerBlock = Block & {
  __typename?: 'CoreSpacerBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreSpacerBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreSubheadBlockAttributes = {
  __typename?: 'CoreSubheadBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
};

/** core/subhead block */
export type CoreSubheadBlock = Block & {
  __typename?: 'CoreSubheadBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreSubheadBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreTableBlockAttributesHeadCells = {
  __typename?: 'CoreTableBlockAttributesHeadCells';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  scope?: Maybe<Scalars['String']>;
  /** @deprecated  */
  tag: Scalars['String'];
};

export type CoreTableBlockAttributesHead = {
  __typename?: 'CoreTableBlockAttributesHead';
  /** @deprecated  */
  cells: Array<Maybe<CoreTableBlockAttributesHeadCells>>;
};

export type CoreTableBlockAttributesBodyCells = {
  __typename?: 'CoreTableBlockAttributesBodyCells';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  scope?: Maybe<Scalars['String']>;
  /** @deprecated  */
  tag: Scalars['String'];
};

export type CoreTableBlockAttributesBody = {
  __typename?: 'CoreTableBlockAttributesBody';
  /** @deprecated  */
  cells: Array<Maybe<CoreTableBlockAttributesBodyCells>>;
};

export type CoreTableBlockAttributesFootCells = {
  __typename?: 'CoreTableBlockAttributesFootCells';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  scope?: Maybe<Scalars['String']>;
  /** @deprecated  */
  tag: Scalars['String'];
};

export type CoreTableBlockAttributesFoot = {
  __typename?: 'CoreTableBlockAttributesFoot';
  /** @deprecated  */
  cells: Array<Maybe<CoreTableBlockAttributesFootCells>>;
};

export type CoreTableBlockAttributes = {
  __typename?: 'CoreTableBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  body: Array<Maybe<CoreTableBlockAttributesBody>>;
  /** @deprecated  */
  caption: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  foot: Array<Maybe<CoreTableBlockAttributesFoot>>;
  /** @deprecated  */
  hasFixedLayout: Scalars['Boolean'];
  /** @deprecated  */
  head: Array<Maybe<CoreTableBlockAttributesHead>>;
};

export type CoreTableBlockDeprecatedV1AttributesHeadCells = {
  __typename?: 'CoreTableBlockDeprecatedV1AttributesHeadCells';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  scope?: Maybe<Scalars['String']>;
  /** @deprecated  */
  tag: Scalars['String'];
};

export type CoreTableBlockDeprecatedV1AttributesHead = {
  __typename?: 'CoreTableBlockDeprecatedV1AttributesHead';
  /** @deprecated  */
  cells: Array<Maybe<CoreTableBlockDeprecatedV1AttributesHeadCells>>;
};

export type CoreTableBlockDeprecatedV1AttributesBodyCells = {
  __typename?: 'CoreTableBlockDeprecatedV1AttributesBodyCells';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  scope?: Maybe<Scalars['String']>;
  /** @deprecated  */
  tag: Scalars['String'];
};

export type CoreTableBlockDeprecatedV1AttributesBody = {
  __typename?: 'CoreTableBlockDeprecatedV1AttributesBody';
  /** @deprecated  */
  cells: Array<Maybe<CoreTableBlockDeprecatedV1AttributesBodyCells>>;
};

export type CoreTableBlockDeprecatedV1AttributesFootCells = {
  __typename?: 'CoreTableBlockDeprecatedV1AttributesFootCells';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content?: Maybe<Scalars['String']>;
  /** @deprecated  */
  scope?: Maybe<Scalars['String']>;
  /** @deprecated  */
  tag: Scalars['String'];
};

export type CoreTableBlockDeprecatedV1AttributesFoot = {
  __typename?: 'CoreTableBlockDeprecatedV1AttributesFoot';
  /** @deprecated  */
  cells: Array<Maybe<CoreTableBlockDeprecatedV1AttributesFootCells>>;
};

export type CoreTableBlockDeprecatedV1Attributes = {
  __typename?: 'CoreTableBlockDeprecatedV1Attributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  body: Array<Maybe<CoreTableBlockDeprecatedV1AttributesBody>>;
  /** @deprecated  */
  caption: Scalars['String'];
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  foot: Array<Maybe<CoreTableBlockDeprecatedV1AttributesFoot>>;
  /** @deprecated  */
  hasFixedLayout: Scalars['Boolean'];
  /** @deprecated  */
  head: Array<Maybe<CoreTableBlockDeprecatedV1AttributesHead>>;
};

export type CoreTableBlockAttributesUnion = CoreTableBlockAttributes | CoreTableBlockDeprecatedV1Attributes;

/** core/table block */
export type CoreTableBlock = Block & {
  __typename?: 'CoreTableBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreTableBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreTagCloudBlockAttributes = {
  __typename?: 'CoreTagCloudBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  showTagCounts: Scalars['Boolean'];
  /** @deprecated  */
  taxonomy: Scalars['String'];
};

/** core/tag-cloud block */
export type CoreTagCloudBlock = Block & {
  __typename?: 'CoreTagCloudBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreTagCloudBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreTextColumnsBlockAttributesContent = {
  __typename?: 'CoreTextColumnsBlockAttributesContent';
  /** @deprecated  */
  children?: Maybe<Scalars['String']>;
};

export type CoreTextColumnsBlockAttributes = {
  __typename?: 'CoreTextColumnsBlockAttributes';
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  columns: Scalars['Float'];
  /** @deprecated  */
  content: Array<Maybe<CoreTextColumnsBlockAttributesContent>>;
  /** @deprecated  */
  width?: Maybe<Scalars['String']>;
};

/** core/text-columns block */
export type CoreTextColumnsBlock = Block & {
  __typename?: 'CoreTextColumnsBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreTextColumnsBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreVerseBlockAttributes = {
  __typename?: 'CoreVerseBlockAttributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  textAlign?: Maybe<Scalars['String']>;
};

export type CoreVerseBlockDeprecatedV1Attributes = {
  __typename?: 'CoreVerseBlockDeprecatedV1Attributes';
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  content: Scalars['String'];
  /** @deprecated  */
  textAlign?: Maybe<Scalars['String']>;
};

export type CoreVerseBlockAttributesUnion = CoreVerseBlockAttributes | CoreVerseBlockDeprecatedV1Attributes;

/** core/verse block */
export type CoreVerseBlock = Block & {
  __typename?: 'CoreVerseBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreVerseBlockAttributesUnion>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type CoreVideoBlockAttributes = {
  __typename?: 'CoreVideoBlockAttributes';
  /** @deprecated  */
  align?: Maybe<Scalars['String']>;
  /** @deprecated  */
  anchor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  className?: Maybe<Scalars['String']>;
  /** @deprecated  */
  controls: Scalars['Boolean'];
  /** @deprecated  */
  id?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  loop?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  muted?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  playsInline?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  poster?: Maybe<Scalars['String']>;
  /** @deprecated  */
  preload: Scalars['String'];
  /** @deprecated  */
  src?: Maybe<Scalars['String']>;
};

/** core/video block */
export type CoreVideoBlock = Block & {
  __typename?: 'CoreVideoBlock';
  /** @deprecated  */
  attributes?: Maybe<CoreVideoBlockAttributes>;
  /**
   * Server side rendered content.
   * @deprecated 
   */
  dynamicContent?: Maybe<Scalars['String']>;
  /**
   * Gutenberg blocks
   * @deprecated 
   */
  innerBlocks?: Maybe<Array<Block>>;
  /**
   * Is block rendered server side.
   * @deprecated 
   */
  isDynamic: Scalars['Boolean'];
  /**
   * Name of the block.
   * @deprecated 
   */
  name: Scalars['String'];
  /** @deprecated  */
  order: Scalars['Int'];
  /**
   * Original HTML content.
   * @deprecated 
   */
  originalContent?: Maybe<Scalars['String']>;
  /**
   * Parent post.
   * @deprecated 
   */
  parentNode: Node;
  /**
   * Parent post id.
   * @deprecated 
   */
  parentNodeDatabaseId: Scalars['Int'];
  /**
   * Original HTML content with inner blocks.
   * @deprecated 
   */
  saveContent?: Maybe<Scalars['String']>;
};

export type BlockUnion = YoastHowToBlock | YoastFaqBlock | AcfCodeBlock | AcfDribbbleBlock | AcfGithubBlock | AcfHeroBlock | AcfIntroBlock | AcfLinkBlock | AcfPresentationsBlock | AcfRowBlock | AcfTestimonialsBlock | AcfWorkBlock | AcfYoutubeBlock | AcfYoutubechannelBlock | CoreParagraphBlock | CoreImageBlock | CoreHeadingBlock | CoreGalleryBlock | CoreListBlock | CoreQuoteBlock | CoreShortcodeBlock | CoreArchivesBlock | CoreAudioBlock | CoreButtonBlock | CoreButtonsBlock | CoreCalendarBlock | CoreCategoriesBlock | CoreCodeBlock | CoreColumnsBlock | CoreColumnBlock | CoreCoverBlock | CoreEmbedBlock | CoreEmbedTwitterBlock | CoreEmbedYoutubeBlock | CoreEmbedFacebookBlock | CoreEmbedInstagramBlock | CoreEmbedWordpressBlock | CoreEmbedSoundcloudBlock | CoreEmbedSpotifyBlock | CoreEmbedFlickrBlock | CoreEmbedVimeoBlock | CoreEmbedAnimotoBlock | CoreEmbedCloudupBlock | CoreEmbedCollegehumorBlock | CoreEmbedCrowdsignalBlock | CoreEmbedDailymotionBlock | CoreEmbedImgurBlock | CoreEmbedIssuuBlock | CoreEmbedKickstarterBlock | CoreEmbedMeetupComBlock | CoreEmbedMixcloudBlock | CoreEmbedPolldaddyBlock | CoreEmbedRedditBlock | CoreEmbedReverbnationBlock | CoreEmbedScreencastBlock | CoreEmbedScribdBlock | CoreEmbedSlideshareBlock | CoreEmbedSmugmugBlock | CoreEmbedSpeakerBlock | CoreEmbedSpeakerDeckBlock | CoreEmbedTiktokBlock | CoreEmbedTedBlock | CoreEmbedTumblrBlock | CoreEmbedVideopressBlock | CoreEmbedWordpressTvBlock | CoreEmbedAmazonKindleBlock | CoreFileBlock | CoreGroupBlock | CoreFreeformBlock | CoreHtmlBlock | CoreMediaTextBlock | CoreLatestCommentsBlock | CoreLatestPostsBlock | CoreMissingBlock | CoreMoreBlock | CoreNextpageBlock | CorePreformattedBlock | CorePullquoteBlock | CoreRssBlock | CoreSearchBlock | CoreSeparatorBlock | CoreBlock | CoreSocialLinksBlock | CoreSocialLinkBlock | CoreSpacerBlock | CoreSubheadBlock | CoreTableBlock | CoreTagCloudBlock | CoreTextColumnsBlock | CoreVerseBlock | CoreVideoBlock;
