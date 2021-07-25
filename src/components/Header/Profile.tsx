import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Jhonata Martins da Costa</Text>
        <Text color="gray.300" fontSize="small">
          jhomcosta@gmail.com
        </Text>
      </Box>
      )}

      <Avatar size="md" name="Jhonata Martins da Costa" src="https://scontent.fbfh4-1.fna.fbcdn.net/v/t31.18172-8/18121669_1194273560681362_9134021599621123363_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=cdbe9c&_nc_eui2=AeFQt8kbE-chqt6CUm3b0CV0KmEb0yQqs2UqYRvTJCqzZROubP20lKHx720Gp4EmnjzgCguy_GOeMXhSPOR-NJoh&_nc_ohc=4BUpuS1uaYgAX8O-qdx&_nc_ht=scontent.fbfh4-1.fna&oh=babb35ed44178fd293b0596729115407&oe=60DCB90E" />
    </Flex>
  );
}