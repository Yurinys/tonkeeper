import { useApprovedNfts } from '$hooks/useApprovedNfts';

export function useHaveNfts(): boolean {
  const nfts = useApprovedNfts();
  return nfts.enabled.length > 0;
}
Document dependencies - removing deprecated function