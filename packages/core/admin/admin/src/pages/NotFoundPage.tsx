/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */
import { LinkButton, EmptyStateLayout } from '@strapi/design-system';
import { ArrowRight } from '@strapi/icons';
import { EmptyPictures } from '@strapi/icons/symbols';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { Layouts } from '../components/Layouts/Layout';
import { Page } from '../components/PageHelpers';

export const NotFoundPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Page.Main labelledBy="title">
      <Layouts.Header
        id="title"
        title={formatMessage({
          id: 'content-manager.pageNotFound',
          defaultMessage: 'Page not found',
        })}
      />
      <Layouts.Content>
        <EmptyStateLayout
          action={
            <LinkButton tag={Link} variant="secondary" endIcon={<ArrowRight />} to="/">
              {formatMessage({
                id: 'app.components.NotFoundPage.back',
                defaultMessage: 'Back to homepage',
              })}
            </LinkButton>
          }
          content={formatMessage({
            id: 'app.page.not.found',
            defaultMessage: "Oops! We can't seem to find the page you're looging for...",
          })}
          hasRadius
          icon={<EmptyPictures width="16rem" />}
          shadow="tableShadow"
        />
      </Layouts.Content>
    </Page.Main>
  );
};