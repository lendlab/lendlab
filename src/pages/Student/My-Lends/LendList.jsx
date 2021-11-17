import { useMe } from "@graphql/auth/custom-hook";
import React from "react";
import { useUserLends } from "@graphql/lends/custom-hooks";
import { LendItem } from "./LendItem";
import { Spinner } from "@chakra-ui/spinner";
import { Stack } from "@chakra-ui/layout";
import { SUBSCRIBE_TO_LENDS } from "@graphql/lends/graphql-subscriptions";

export const LendList = (props) => {
  const { data: dataMe } = useMe();

  const { loading, data, error, subscribeToMore } = useUserLends(
    dataMe?.me.cedula
  );

  if (loading || !data) return <Spinner />;

  return (
    <Stack>
      {data.getUserLends.map((lend) => (
        <LendItem
          key={lend.id_lend}
          lend={lend}
          subscribeToNew={() => {
            subscribeToMore({
              document: SUBSCRIBE_TO_LENDS,

              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                const newSuscription =
                  subscriptionData.data.newLendSubscription;

                return Object.assign({}, prev, {
                  getUserLends: [newSuscription, ...prev.getUserLends],
                });
              },
            });
          }}
        />
      ))}
    </Stack>
  );
};
